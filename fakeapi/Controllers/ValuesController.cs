using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace fakeapi.Controllers
{
    [EnableCors("AllowCors")]
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        public static List<Video> fakeVideoTable;

        public ValuesController()
        {
            if (fakeVideoTable == null)
            {
                fakeVideoTable = new List<Video>();                
            }
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Video>> Get()
        {
            return fakeVideoTable;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Video> Get(int id)
        {
            return fakeVideoTable.Where(x=>x.Id == id).FirstOrDefault();
        }

        // POST api/values
        [HttpPost]
        public Video Post(Video video)
        {
            if (video != null &&
            !String.IsNullOrEmpty(video.Title) &&
            !String.IsNullOrEmpty(video.Description))
            {
                video.Id = fakeVideoTable.Count()+1;
                fakeVideoTable.Add(video);
                return video;
            }            

            return null;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public Video Put(int id, Video video)
        {
            Video _vi = fakeVideoTable.Where(x=>x.Id == id).FirstOrDefault();
            _vi.Title = video.Title;
            _vi.Description = video.Description;
            return _vi;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            fakeVideoTable.Remove(fakeVideoTable.Where(x=>x.Id == id).FirstOrDefault());
        }
    }
}
