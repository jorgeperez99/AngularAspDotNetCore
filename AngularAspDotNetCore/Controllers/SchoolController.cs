using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularAspDotNetCore.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularAspDotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SchoolController : ControllerBase  {
        [HttpGet] // Matches '/School'
        public List<School> Get() {
            // ...
            var schools = new List<School>();
            schools.Add(new School { Name = "Village Green", Teachers = new List<Teacher> { new Teacher { Name = "gina" } } } );
            schools.Add(new School { Name = "Marjory", Teachers = new List<Teacher> { new Teacher { Name = "mike" } } });
            return schools;
        }


        [HttpGet] // Matches '/School'
        [Route("all")]
        public ActionResult<List<School>> GetList() {
            // ...
            var schools = new List<School>();
            schools.Add(new School { Name = "Village Green", Teachers = new List<Teacher> { new Teacher { Name = "gina" } } });
            schools.Add(new School { Name = "Marjory", Teachers = new List<Teacher> { new Teacher { Name = "mike" } } });
            return this.Ok(schools);
        }

        [HttpGet] // Matches '/School'
        [Route("error")]
        public ActionResult<List<School>> GetError() {
            // ...
            return this.NotFound();
        }
    }
}