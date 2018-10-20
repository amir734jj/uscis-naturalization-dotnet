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
        private readonly IScoreLogic _scoreLogic;

        public ScoreController(IIdentityLogic identityLogic, IScoreLogic scoreLogic)
        {
            _identityLogic = identityLogic;
            _scoreLogic = scoreLogic;
        }
        
        /// <summary>
        /// Returns score info
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("")]
        [SwaggerOperation("ScoreInfo")]
        public async Task<IActionResult> ScoreInfo()
        {
            var info = await _identityLogic.SessionInfoToUser(HttpContext.Session.GetUserInfo());

            var result = await _scoreLogic.ScoreInfo(info);
            
            return Ok(result);
        }
        
        /// <summary>
        /// Updates the score
        /// </summary>
        /// <returns></returns>
        [HttpPut]
        [Route("")]
        [SwaggerOperation("Score")]
        public async Task<IActionResult> Score([FromBody] ScoreUpdateViewModel scoreUpdateViewModel)
        {
            var info = await _identityLogic.SessionInfoToUser(HttpContext.Session.GetUserInfo());

            var result = await _scoreLogic.SetScore(info, scoreUpdateViewModel.Offset);
            
            return Ok(result);
        }
    }
}