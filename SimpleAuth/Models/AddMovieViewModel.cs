using Microsoft.AspNetCore.Identity;

namespace SimpleAuth.Models
{
    public class AddMovieViewModel
    {
        public string UserId { get; set; }
        public int MovieId { get; set; }
    }
}
