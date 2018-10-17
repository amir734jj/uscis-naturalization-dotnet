using System.Threading.Tasks;
using API.Attributes;
using API.Extensions;
using Logic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using Models.Constants;
using Models.ViewModels;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class IdentityController : Controller
    {
        private readonly IIdentityLogic _identityLogic;
        
        private readonly IUserLogic _userLogic;

        public IdentityController(IIdentityLogic identityLogic, IUserLogic userLogic)
        {
            _identityLogic = identityLogic;
            _userLogic = userLogic;
        }
        
        /// <summary>
        /// Login the user
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Route("Login")]
        [SwaggerOperation("Login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel loginViewModel)
        {
            var result = await _identityLogic.Login(loginViewModel);

            // Set session values
            if (result != null)
            {
                HttpContext.Session.SetString(ApiConstants.Username, result.Username);
                HttpContext.Session.SetString(ApiConstants.PasswordHash, result.PasswordHash);
                HttpContext.Session.SetString(ApiConstants.Authenticated.Key, ApiConstants.Authenticated.Value);
                
                return Ok($"Successfully logged-in {result.Username}");
            }

            return BadRequest($"Failed to log-in {loginViewModel?.Username}");
        }
        
        /// <summary>
        /// Register the user
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Route("Register")]
        [SwaggerOperation("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel user)
        {
            // Save the user
            var result = await _identityLogic.Register(user);

            if (result)
            {
                return Ok("Successfully registered");
            }

            return BadRequest("Failed to register");
        }

        /// <summary>
        /// Logout the user
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("Logout")]
        [SwaggerOperation("Logout")]
        public async Task<IActionResult> Logout()
        {
            var userInfo = HttpContext.Session.GetUserInfo();
            
            var result = await _identityLogic.Logout(userInfo);
            
            // Remove session values
            if (result)
            {
                HttpContext.Session.Clear();
                return Ok("Successfully logged-out");
            }

            return BadRequest("Failed to log-out");
        }
        
        /// <summary>
        /// Is Authenticated or not
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("IsAuthenticated")]
        [SwaggerOperation("NotAuthenticated")]
        [AuthorizeMiddleware]
        public async Task<IActionResult> IsAuthenticated()
        {
            return Ok("Authenticated");
        }
        
        /// <summary>
        /// Not authenticated view
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("NotAuthenticated")]
        [SwaggerOperation("NotAuthenticated")]
        public async Task<IActionResult> NotAuthenticated()
        {
            return BadRequest("Not authenticated!");
        }
    }
}