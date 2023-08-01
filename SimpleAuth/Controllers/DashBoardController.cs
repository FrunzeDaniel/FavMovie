using Microsoft.AspNetCore.Mvc;

namespace SimpleAuth.Controllers
{
    public class DashBoardController : Controller
    {

        
        public IActionResult DashBoard()
        {
            return View();
        }
    }
}
