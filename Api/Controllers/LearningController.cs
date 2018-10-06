using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    [Route("[controller]")]
    public class LearningController : Controller
    {
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }
    }
}