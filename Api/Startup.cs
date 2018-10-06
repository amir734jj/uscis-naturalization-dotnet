using System;
using System.Reflection;
using API.Extensions;
using API.Utilities;
using Auth0.ManagementApi;
using AutoMapper;
using Dal.Utilities;
using Logic.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using StructureMap;
using Swashbuckle.AspNetCore.Swagger;

namespace API
{ 
    public class Startup
    {
        private readonly IConfigurationRoot _configuration;

        private readonly IHostingEnvironment _env;
        
        private Container _container;

        public Startup(IHostingEnvironment env)
        {
            _env = env;

            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            _configuration = builder.Build();
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        /// </summary>
        /// <param name="services"></param>
        /// <returns></returns>
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {            
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials()
                        .Build());
            });
            
            var (domain, clientId, clientSecret) = (
                EnvironmentUtility.GetEnvironmentVariableOrDefault("AUTH0_DOMAIN"),
                EnvironmentUtility.GetEnvironmentVariableOrDefault("AUTH0_CLIENT_ID"),
                EnvironmentUtility.GetEnvironmentVariableOrDefault("AUTH0_CLIENT_SECRET")
            );

            services.AddRouting(options =>
            {
                options.LowercaseUrls = true; 
            });

            if (!_env.IsLocalhost())
            {
                services.AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

                }).AddJwtBearer(options =>
                {
                    options.Authority = $"https://{domain}/";
                    options.Audience = $"https://{domain}/api/v2/";
                });
            }
            
            // All the other service configuration.
            services.AddAutoMapper(x => { x.AddProfiles(Assembly.Load("Models")); });

            services.AddSwaggerGen(c => { c.SwaggerDoc("v1", new Info {Title = "Milwaukee-Internationals-API", Version = "v1"}); });

            services.AddMvc(x =>
            {
                if (_env.IsLocalhost())
                {
                    x.Filters.Add<AllowAnonymousFilter>();
                }
                
                x.ModelValidatorProviders.Clear();

                // Not need to have https
                x.RequireHttpsPermanent = false;
            }).AddJsonOptions(x =>
            {
                x.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                x.SerializerSettings.Converters.Add(new StringEnumConverter());
            }).AddRazorPagesOptions(x =>
            {
                x.Conventions.ConfigureFilter(new IgnoreAntiforgeryTokenAttribute());
            });
            
            _container = new Container();

            _container.Configure(config =>
            {
                // Register stuff in container, using the StructureMap APIs...
                config.Scan(_ =>
                {
                    _.AssemblyContainingType(typeof(Startup));
                    _.Assembly("Logic");
                    _.Assembly("DAL");
                    _.WithDefaultConventions();
                });

                // Populate the container using the service collection
                config.Populate(services);

                config.For<EntityDbContext>().Use(new EntityDbContext(builder =>
                {
                    if (_env.IsLocalhost())
                    {
                        builder.UseSqlite(_configuration.GetValue<string>("ConnectionStrings:Sqlite"));
                    }
                    else
                    {
                        builder.UseNpgsql(
                            SqlConnectionStringUtility.ConnectionStringUrlToResource(Environment.GetEnvironmentVariable("DATABASE_URL"))
                            ?? throw new Exception("DATABASE_URL is null"));
                    }
                })).Transient();
                

                config.For<IManagementApiClient>().Use("`Auth0` client", x =>
                {
                    // Get management token
                    var token = Auth0TokenUtility.GetAuth0ManagementToken(domain, clientId, clientSecret);

                    // Initialize management client
                    var auth0ManagementApiClient = new ManagementApiClient(token, new Uri($"https://{domain}/api/v2"));

                    // Return client
                    return auth0ManagementApiClient;
                });
                    
                // It has to be a singleton
                config.For<IIdentityDictionary>().Singleton();
                
                // Singleton to handle identities
                config.For<IIdentityLogic>().Singleton();
            });
            
            return _container.GetInstance<IServiceProvider>();
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors("CorsPolicy");

            if (_env.IsLocalhost())
            {
                // Enable middleware to serve generated Swagger as a JSON endpoint.
                app.UseSwagger();

                // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
                // specifying the Swagger JSON endpoint.
                app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1"); });
            }

            app.UseDeveloperExceptionPage();
            
            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute("default", "{controller=Home}/{action=Index}");
            });

            app.UseStaticFiles();

            // Just to make sure everything is running fine
            _container.GetInstance<EntityDbContext>();
            
            Console.WriteLine("Application Started!");
        }
    }
}