using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Angulo.Startup))]
namespace Angulo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
