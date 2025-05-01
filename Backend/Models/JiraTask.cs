using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace DG.Jira.Backend.Models {
    public class JiraTask {
        [Key] 
        public int Id { get; set;}
        public string Type { get; set;}
        public string Title { get; set;}
        public string Priority { get; set;}
        public string DroppableId { get; set;}
    }
}