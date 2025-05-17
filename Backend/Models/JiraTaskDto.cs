using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class JiraTaskDto
    {
        public string Type { get; set; }
        public string Title { get; set; }
        public string Priority { get; set; }
        public string DroppableId { get; set; }
    }
}