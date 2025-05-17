using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace DG.Jira.Backend.Data
{
    using Models;
    
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<JiraTask> Tasks { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options){

        }

        protected override void OnModelCreating(ModelBuilder builder){
            base.OnModelCreating(builder);

            builder.Entity<JiraTask>()
                .HasOne(t => t.User)
                .WithMany()
                .HasForeignKey(t => t.UserId);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=app.db");
        }
    }
}