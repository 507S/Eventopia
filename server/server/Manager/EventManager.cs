using server.Context;
using server.Interfaces.Manager;
using server.Models;
using server.Repository;
using EF.Core.Repository.Interface.Repository;
using EF.Core.Repository.Manager;
using Microsoft.Extensions.Hosting;

namespace server.Manager
{
    public class EventManager : CommonManager<Event>, IEventManager
    {
        public EventManager(ApplicationDbContext _dbContext) : base(new EventRepository(_dbContext))
        {
        }

        public Event GetById(int id)
        {
            return GetFirstOrDefault(x => x.Id == id);
        }

        public ICollection<Event> SearchEvent(string text)
        {
            text = text.ToLower();
            return Get(c => c.Name.ToLower().Contains(text) || c.Description.ToLower().Contains(text)
             || c.Location.ToLower().Contains(text) || c.Category.ToLower().Contains(text) || c.EventDate.ToString().Contains(text)
            );
        }




    }
}
