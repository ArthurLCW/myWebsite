using Microsoft.EntityFrameworkCore;

namespace DotNetAPI.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<CommentPost> Comments { get; set; }
    }
}

