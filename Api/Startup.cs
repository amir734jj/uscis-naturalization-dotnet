using System;
using System.Reflection;
using API.Attributes;
using API.Extensions;
using API.Utilities;
using AutoMapper;
using Dal.Utilities;
using Logic.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Models.Constants;
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

            services.AddRouting(options =>
            {
                options.LowercaseUrls = true; 
            });

            services.AddDistributedMemoryCache();
            
            services.AddSession(options =>
            {
                // Set a short timeout for easy testing.
                options.IdleTimeout = TimeSpan.FromMinutes(50);
                options.Cookie.HttpOnly = false;
                options.Cookie.Name = ApiConstants.AuthenticationSessionCookieName;
                options.Cookie.SecurePolicy = CookieSecurePolicy.None;
            });
            
            // All the other service configuration.
            services.AddAutoMapper(x => { x.AddProfiles(Assembly.Load("Models")); });

            services.AddSwaggerGen(c => { c.SwaggerDoc("v1", new Info {Title = "USCIS Naturalization Exam", Version = "v1"}); });

            services.AddMvc(x =>
            {
                if (_env.IsLocalhost())
                {
                    x.Filters.Add<AllowAnonymousFilter>();
                }
                
                // Authorize
                x.Filters.Add<AuthorizeActionFilter>();
                
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

                // EntityDbContext builder
                var entityDbContextBuilderFunc = new Func<EntityDbContext>(() => new EntityDbContext(builder =>
                {
                    if (_env.IsLocalhost())
                    {
                        builder.UseSqlite(_configuration.GetValue<string>("ConnectionStrings:Sqlite"));
                    }
                    else
                    {
                        var pqConnectionString =
                            SqlConnectionStringUtility.ConnectionStringUrlToResource(
                                Environment.GetEnvironmentVariable("DATABASE_URL"));

                        if (!string.IsNullOrEmpty(pqConnectionString))
                        {
                            builder.UseNpgsql(pqConnectionString);
                        }
                        else
                        {
                            builder.UseInMemoryDatabase(Guid.NewGuid().ToString());
                        }
                    }
                }));

                // Build the DbContext builder
                config.For<EntityDbContext>().Use(() => entityDbContextBuilderFunc()).Transient();
                
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

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1"); });

            app.UseDeveloperExceptionPage();
                                    
            app.UseCookiePolicy();

            app.UseSession();

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