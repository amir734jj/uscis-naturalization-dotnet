using System;
using System.Threading.Tasks;
using API.Extensions;
using Logic.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace API.Controllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
        
        /// <summary>
        /// Echos response
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Echo()
        {
            return Ok(Environment.Version);
        }
    }
}