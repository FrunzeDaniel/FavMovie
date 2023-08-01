using Microsoft.AspNetCore.Identity;

namespace SimpleAuth.Models
{
    public class FavouriteFilms
    {
        public Guid id { get; set; }
        public string UserId { get; set; }
        public int FavoriteMovieId { get; set; }

    }
}
