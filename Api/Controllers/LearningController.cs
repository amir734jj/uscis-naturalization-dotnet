using API.Attributes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AuthorizeMiddleware]
    [Route("api/[controller]")]
    public class LearningController : Controller
    {

    }
}