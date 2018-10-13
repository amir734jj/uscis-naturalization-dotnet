using System.Threading.Tasks;
using API.Attributes;
using API.Extensions;
using Logic.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace API.Controllers
{
    [AuthorizeMiddleware]
    [Route("[controller]")]
    public class TestingController : Controller
    {
        private readonly IIdentityLogic _identityLogic;
        private readonly ITestingLogic _testingLogic;

        public TestingController(IIdentityLogic identityLogic, ITestingLogic testingLogic)
        {
            _identityLogic = identityLogic;
            _testingLogic = testingLogic;
        }
        
        /// <summary>
        /// Returns driver view
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("")]
        [SwaggerOperation("Index")]
        public async Task<IActionResult> SetScore([FromBody] int offset)
        {
            return Ok(_testingLogic.SetScore(await _identityLogic.SessionInfoToUser(HttpContext.Session.GetUserInfo()), offset));
        }
    }
}