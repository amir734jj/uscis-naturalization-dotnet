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
    public class ScoreController : Controller
    {
        private readonly IIdentityLogic _identityLogic;
        private readonly ITestingLogic _testingLogic;

        public ScoreController(IIdentityLogic identityLogic, ITestingLogic testingLogic)
        {
            _identityLogic = identityLogic;
            _testingLogic = testingLogic;
        }
        
        /// <summary>
        /// Returns driver view
        /// </summary>
        /// <returns></returns>
        [HttpPut]
        [Route("")]
        [SwaggerOperation("Score")]
        public async Task<IActionResult> Score([FromBody] ScoreUpdateViewModel scoreUpdateViewModel)
        {
            var info = await _identityLogic.SessionInfoToUser(HttpContext.Session.GetUserInfo());
            
            return Ok(await _testingLogic.SetScore(info, scoreUpdateViewModel.Offset));
        }
    }
}