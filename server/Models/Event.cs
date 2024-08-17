using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Event
    {

        public int Id { get; set; }
        [Required(ErrorMessage = "Please enter event name.")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Please enter event description.")]
        public string Description { get; set; }
        [Required(ErrorMessage = "Please enter event category.")]
        public string Category { get; set; }
        [Required(ErrorMessage = "Please enter event location.")]
        public string Location { get; set; }
        [Required(ErrorMessage = "Please enter event date.")]
        public DateTime EventDate { get; set; } = DateTime.Now;
        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}
