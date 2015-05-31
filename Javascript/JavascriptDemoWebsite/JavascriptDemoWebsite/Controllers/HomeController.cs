using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JavascriptDemoWebsite.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Time Tracker";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Example()
        {
            return View();
        }

        public ActionResult Playground()
        {
            return View();
        }
    }
}
