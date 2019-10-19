using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAspDotNetCore.Model {
    public class School {
        public string Name { get; set; }

        public List<Teacher> Teachers { get; set; }
    }
}
