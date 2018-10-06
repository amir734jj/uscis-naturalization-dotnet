using System.Threading.Tasks;
using Logic.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace API.Controllers
{
    [Authorize]
    [Route("[controller]")]
    public class TestingController : Controller
    {
        private readonly IUserLogic _userLogic;

        public TestingController(IUserLogic userLogic)
        {
            _userLogic = userLogic;
        }
        
        [Route("")]
        public IActionResult Index()
        {
            return View();
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
            return Ok();
        }
    }
}