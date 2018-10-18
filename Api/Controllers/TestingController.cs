using System.Threading.Tasks;
using API.Attributes;
using API.Extensions;
using Logic.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models.ViewModels;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace API.Controllers
{
    [AuthorizeMiddleware]
    [Route("api/[controller]")]
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
        [HttpPut]
        [Route("Score")]
        [SwaggerOperation("Score")]
        public async Task<IActionResult> Score([FromBody] ScoreUpdateViewModel scoreUpdateViewModel)
        {
            return Ok(_testingLogic.SetScore(await _identityLogic.SessionInfoToUser(HttpContext.Session.GetUserInfo()),
                scoreUpdateViewModel.Offset));
        }
    }
}