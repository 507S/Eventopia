
using Microsoft.EntityFrameworkCore;

using server.Models;
namespace DotNet6ApiDemo.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Event> Events { get; set; }
    }
}