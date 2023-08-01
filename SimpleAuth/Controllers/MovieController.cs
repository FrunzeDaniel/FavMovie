using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using SimpleAuth.Data;
using SimpleAuth.Models;
using System.Security.Claims;

namespace SimpleAuth.Controllers
{
    public class MovieController : Controller
    {
        private readonly ApplicationDbContext applicationDbContext;

        public MovieController(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        [HttpGet]
        public IActionResult Add()
        {
            return View();
        }


        [HttpPost]
        public async Task<IActionResult> Add(AddMovieViewModel addMovieViewRequest)
        {
            var movie = new FavouriteFilms()
            {
                id = Guid.NewGuid(),
                UserId = User.FindFirstValue(ClaimTypes.NameIdentifier),
                FavoriteMovieId = addMovieViewRequest.MovieId
            };
            await applicationDbContext.favFilms.AddAsync(movie);
            await applicationDbContext.SaveChangesAsync();
            return View("Add");

        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> MyFilms()
        {
            var movie = await applicationDbContext.favFilms.Where(x => x.UserId == User.FindFirstValue(ClaimTypes.NameIdentifier).ToString()).ToListAsync();
            return View(movie);
        }

        public IActionResult SearchMovie()
        {
            return View();
        }


        /*   [HttpGet]
        public async Task<IActionResult> Index() 
        {
            var employees = await mvcDemoDBContext.Employees.ToListAsync();
            return View(employees);
        }
        */

    }
}
