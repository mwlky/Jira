using DG.Jira.Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace DG.Jira.Backend.Data
{

    public class ApplicationDbContext : DbContext
    {
        public DbSet<JiraTask> tasks { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=app.db");
        }
    }
}