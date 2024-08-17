using server.Models;
using EF.Core.Repository.Interface.Manager;
using Microsoft.Extensions.Hosting;

namespace server.Interfaces.Manager
{
    public interface IEventManager:ICommonManager<Event>
    {
        public Event GetById(int id);
        ICollection<Event> SearchEvent(string text);
    }
}
