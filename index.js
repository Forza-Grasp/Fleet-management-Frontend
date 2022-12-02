import "https://unpkg.com/navigo"  //Will create the global Navigo object used below
import {loadHtml, adjustForMissingHash, setActiveLink, renderTemplate} from "./utils.js"

import { initViewAllSpecificCars } from "./src/pages/viewAllSpecificCars/viewAllSpecificCars.js"
import { initLogin } from "./src/pages/login/login.js";

//Color
import { initColorTypes } from "./src/pages/color/colorTypes/colorTypeFunctions.js"

//Users
import { initCreateAdminLogin } from "./src/pages/createLogins/userAdmin/adminLogin.js";
import { initCreateBuyerLogin } from "./src/pages/createLogins/userBuyer/buyerLogin.js";
import { initCreateLeaserLogin } from "./src/pages/createLogins/userLeaser/leaserLogin.js";
import { initCreateEconomyLogin } from "./src/pages/createLogins/userEconomy/economyLogin.js";


window.addEventListener("load", async () => {
  const templateHome = await loadHtml("./src/pages/home/home.html")
  const templateViewAllCars = await loadHtml("./src/pages/viewAllSpecificCars/viewAllSpecificCars.html")
  const templateLogin = await loadHtml("./src/pages/login/login.html")
  const templateColorMix = await loadHtml("./src/pages/color/colorMix/color-mix.html")
  const templateColorTypes = await loadHtml("./src/pages/color/colorTypes/color-types.html")

  //users
  const templateCreateAdminLogin = await loadHtml("./src/pages/createLogins/userAdmin/adminLogin.html")
  const templateCreateBuyerLogin = await loadHtml("./src/pages/createLogins/userBuyer/buyerLogin.html")
  const templateLeaserLogin = await loadHtml("./src/pages/createLogins/userLeaser/leaserLogin.html")
  const templateEconomyLogin = await loadHtml("./src/pages/createLogins/userEconomy/economyLogin.html")

  const router = new Navigo("/", { hash: true });
  window.router = router

  adjustForMissingHash()
  router
    .hooks({
      before(done, match) {
        setActiveLink("topnav", match.url)
        done()
      }
    })
    .on({
      "/": () => renderTemplate(templateHome, "content"),
      "/all-specific-cars": () => {
        renderTemplate(templateViewAllCars, "content")
        initViewAllSpecificCars()
      },
      "/create/login/admin": () => {
        renderTemplate(templateCreateAdminLogin, "content")
        initCreateAdminLogin()
      },
      "/create/login/buyer": () => {
        renderTemplate(templateCreateBuyerLogin, "content")
        initCreateBuyerLogin()
      },
      "/create/login/leaser": () => {
        renderTemplate(templateLeaserLogin, "content")
        initCreateLeaserLogin()
      },
      "/create/login/economy": () => {
        renderTemplate(templateEconomyLogin, "content")
        initCreateEconomyLogin()
      },
      "/login": () => {
        renderTemplate(templateLogin, "content")
        initLogin()
      },
      "/color-types": () => {
        renderTemplate(templateColorTypes, "content")
        initColorTypes(router)
      }
    })
    .notFound(() => renderTemplate("No page for this route found", "content"))
    .resolve()
});


window.onerror = (e) => alert(e)