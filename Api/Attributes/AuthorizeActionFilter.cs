using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using API.Extensions;
using Logic.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using Models.Constants;

namespace API.Attributes
{
    public class AuthorizeActionFilter : IAsyncActionFilter
    {
        private readonly IIdentityLogic _identityLogic;
        
        private readonly IHostingEnvironment _hostingEnvironment;

        public AuthorizeActionFilter(IIdentityLogic identityLogic, IHostingEnvironment hostingEnvironment)
        {
            _identityLogic = identityLogic;
            _hostingEnvironment = hostingEnvironment;
        }
        
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var controller = (Controller) context.Controller;
            var method = ((ControllerActionDescriptor) context.ActionDescriptor).MethodInfo;
            
            var controllerLevelAuthorize = controller.GetType().GetCustomAttribute<AuthorizeMiddlewareAttribute>();
            var actionLevelAuthorize = method.GetCustomAttribute<AuthorizeMiddlewareAttribute>();

            if (_hostingEnvironment.IsLocalhost())
            {
                await next();
            }
            else if (controllerLevelAuthorize == null && actionLevelAuthorize == null)
            {
                await next();
            }
            else
            {
                // Try to get username/password from session
                var userInfo = context.HttpContext.Session.GetUserInfo();

                // Validate username/password
                var result = await _identityLogic.IsAuthenticated(userInfo);

                if (result)
                {
                    await next();
                }
                else
                {
                    // Redirect to not-authenticated
                    context.HttpContext.Response.Redirect($"{ApiConstants.WebSiteApiUrl}/Identity/NotAuthenticated");
                }
            }
        }
    }
}