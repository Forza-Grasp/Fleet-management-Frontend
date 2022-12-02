import "https://unpkg.com/navigo"  //Will create the global Navigo object used below
import {loadHtml, adjustForMissingHash, setActiveLink, renderTemplate} from "./utils.js"

import { initViewAllSpecificCars } from "./src/pages/viewAllSpecificCars/viewAllSpecificCars.js"
import { initLogin } from "./src/pages/login/login.js";
import {initColorMix} from "./src/pages/color/colorMix/colorMixFunctions.js"; //just made
import { initColorTypes } from "./src/pages/color/colorTypes/colorTypeFunctions.js"



window.addEventListener("load", async () => {
  const templateHome = await loadHtml("./src/pages/home/home.html")
  const templateViewAllCars = await loadHtml("./src/pages/viewAllSpecificCars/viewAllSpecificCars.html")
  const templateLogin = await loadHtml("./src/pages/login/login.html")
  const templateColorMix = await loadHtml("./src/pages/color/colorMix/color-mix.html")
  const templateColorTypes = await loadHtml("./src/pages/color/colorTypes/color-types.html")

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
      "/login": () => {
        renderTemplate(templateLogin, "content")
        initLogin()
      },
      "/color-types": () => {
        renderTemplate(templateColorTypes, "content")
        initColorTypes(router)
      },
      "/color-mix": () => { //just made
        renderTemplate(templateColorMix, "content")
        initColorMix(router)
      }
    })
    .notFound(() => renderTemplate("No page for this route found", "content"))
    .resolve()
});


window.onerror = (e) => alert(e)