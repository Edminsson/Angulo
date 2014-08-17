using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestFramework
{
    public static class Pages
    {
        public static class HomePage
        {
            static string Url = "http://pluralsight.com";

            public static void Goto()
            {
                Browser.Goto(Url);
            }
            public static Boolean IsAt()
            {
                return Browser.Title.Contains("Pluralsight");
            }
        }
    }
}
