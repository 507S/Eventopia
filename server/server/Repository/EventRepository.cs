using server.Context;
using server.Interfaces.Repository;
using server.Models;
using EF.Core.Repository.Repository;
using Microsoft.EntityFrameworkCore;

namespace server.Repository
{
    public class EventRepository : CommonRepository<Event>, IEventtRepository
    {
        public EventRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}
