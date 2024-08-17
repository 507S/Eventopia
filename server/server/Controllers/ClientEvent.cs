using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    public class ClientEvent : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
