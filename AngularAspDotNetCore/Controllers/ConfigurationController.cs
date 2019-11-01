using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularAspDotNetCore.Model;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace AngularAspDotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConfigurationController : ControllerBase  {
        private IConfiguration configuration;
        private IHostingEnvironment env;

        public ConfigurationController(IConfiguration config, IHostingEnvironment env) {
            configuration = config;
            this.env = env;
        }

        [HttpGet]
        public ActionResult<ConfigurationSetting> Get() {
            var cs = new ConfigurationSetting();
            cs.ConfigurationType = env.EnvironmentName;
            return this.Ok(cs);
        }

    }
}