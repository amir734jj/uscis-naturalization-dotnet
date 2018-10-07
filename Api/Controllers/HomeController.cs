using System.Threading.Tasks;
using API.Extensions;
using Logic.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace API.Controllers
{
    [Authorize]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class HomeController : Controller
    {
        public async Task<IActionResult> Index()
        {
            return View();
        }
    }
}