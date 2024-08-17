using CoreApiResponse;
using server.Interfaces.Manager;
using server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Linq;

namespace server.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class EventController : BaseController
    {
        private readonly IEventManager _eventManager;

        public EventController(IEventManager eventManager)
        {
            _eventManager = eventManager;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var events = _eventManager.GetAll().OrderBy(c => c.CreatedDate).ThenBy(c => c.Name).ToList();
                return CustomResult("Data loaded successfully", events);
            }
            catch (Exception ex)
            {
                return CustomResult(ex.Message, HttpStatusCode.BadRequest);
            }
        }

        [HttpPost]
        public IActionResult AddEvent(Event events)
        {
            try
            {
                events.CreatedDate = DateTime.Now;
                bool isAdded = _eventManager.Add(events);
                if (isAdded)
                {
                    return CustomResult("Event has been added", events);
                }

                return CustomResult("Event couldn't be saved.", HttpStatusCode.BadRequest);
            }
            catch (Exception ex)
            {
                return CustomResult(ex.Message, HttpStatusCode.BadRequest);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEvent(int id)
        {
            try
            {
                var eventDetails = _eventManager.GetById(id);
                if (eventDetails == null)
                {
                    return CustomResult("Event not found", HttpStatusCode.NotFound);
                }
                bool isDeleted = _eventManager.Delete(eventDetails);
                if (isDeleted)
                {
                    return CustomResult("Event has been deleted.");
                }
                return CustomResult("Event deletion failed.", HttpStatusCode.BadRequest);
            }
            catch (Exception ex)
            {
                return CustomResult(ex.Message, HttpStatusCode.BadRequest);
            }
        }

        [HttpPut]
        public IActionResult EditEvent(Event events)
        {
            try
            {
                if (events.Id == 0)
                {
                    return CustomResult("Event is missing", HttpStatusCode.BadRequest);
                }

                bool isEdited = _eventManager.Update(events);
                if (isEdited)
                {
                    return CustomResult("Event has been updated");
                }
                return CustomResult("Event update failed", HttpStatusCode.BadRequest);
            }
            catch (Exception ex)
            {
                return CustomResult(ex.Message, HttpStatusCode.BadRequest);
            }
        }

        [HttpGet("text")]
        public IActionResult Search(string text)
        {
            try
            {
                var events = _eventManager.SearchEvent(text);
                if (events != null && events.Any())
                {
                    return CustomResult("Search result found", events);
                }
                return CustomResult("No matching events found", HttpStatusCode.NotFound);
            }
            catch (Exception ex)
            {
                return CustomResult(ex.Message, HttpStatusCode.BadRequest);
            }
        }
    }
}
