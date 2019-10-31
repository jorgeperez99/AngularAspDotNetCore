using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace AngularAspDotNetCore
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("==============================================================================================");
            Console.WriteLine("==============================================================================================");
            Console.WriteLine("==============================================================================================");
            Console.WriteLine("==============================================================================================");
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) {
            var config = new ConfigurationBuilder()
                .AddCommandLine(args)
                .Build();
            var env = config.GetValue<string>("environment");
            Console.WriteLine("Enviroment variable is: " + env);
            return WebHost.CreateDefaultBuilder(args)
                .UseConfiguration(config)
                .UseStartup<Startup>();
        }
    }
}
