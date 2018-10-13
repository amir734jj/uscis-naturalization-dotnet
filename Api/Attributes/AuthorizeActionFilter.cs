using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using API.Extensions;
using Logic.Interfaces;
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

        public AuthorizeActionFilter(IIdentityLogic identityLogic)
        {
            _identityLogic = identityLogic;
        }
        
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var controller = (Controller) context.Controller;
            var method = ((ControllerActionDescriptor) context.ActionDescriptor).MethodInfo;
            
            var controllerLevelAuthorize = controller.GetType().GetCustomAttribute<AuthorizeMiddlewareAttribute>();
            var actionLevelAuthorize = method.GetCustomAttribute<AuthorizeMiddlewareAttribute>();

            if (controllerLevelAuthorize == null && actionLevelAuthorize == null)
            {
                await next();
            }
            else
            {
                // Try to get username/password from session
                var userInfo = context.HttpContext.Session.GetUserInfo();

                // Validate username/password
                var result = await _identityLogic.Authenticated(userInfo);

                if (result)
                {
                    await next();
                }
                else
                {
                    // Redirect to not-authenticated
                    context.HttpContext.Response.Redirect($"{ApiConstants.WebSiteUrl}/Identity/NotAuthenticated");
                }
            }
        }
    }
}