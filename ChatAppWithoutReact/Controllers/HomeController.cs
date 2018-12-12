using Microsoft.AspNetCore.Mvc;

namespace ChatAppWithoutReact.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
