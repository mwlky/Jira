using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace DG.Jira.Backend.Models
{
    public class JiraTask
    {
        [Key]
        public int Id { get; set; }
        public string Type { get; set; }
        public string Title { get; set; }
        public string Priority { get; set; }
        public string DroppableId { get; set; }

        public string UserId { get; set; }
        public IdentityUser User {get;set;}
    }
}