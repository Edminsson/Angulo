using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace TestFramework
{
    public static class Browser
    {
        static IWebDriver driver = new FirefoxDriver();
        public static string Title;
        public static void Goto(string Url)
        {
            driver.Url = Url;
            Title = driver.Title;
        }
        public static void Close()
        {
            driver.Close();
        }
    }
}
