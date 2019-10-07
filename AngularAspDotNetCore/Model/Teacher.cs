using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAspDotNetCore.Model {
    public class Teacher     {
        public string Name { get; set; }
        public IList<Student> Students { get; set; }
    }
}
