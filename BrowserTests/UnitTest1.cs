using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TestFramework;

namespace BrowserTests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void CanGoToHomePage()
        {
            Pages.HomePage.Goto();
            Assert.IsTrue(Pages.HomePage.IsAt());
        }

        [TestCleanup]
        public void CleanUp()
        {
            Browser.Close();
        }
    }
}
