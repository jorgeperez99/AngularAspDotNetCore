using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularAspDotNetCore.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace AngularAspDotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConfigurationController : ControllerBase  {
        private IConfiguration configuration;

        public ConfigurationController(IConfiguration config) {
            configuration = config;
        }

        [HttpGet]
        public ConfigurationSetting Get() {
            var cs = new ConfigurationSetting();
            cs.ConfigurationType = configuration["environmentType"];
            return cs;
        }

    }
}