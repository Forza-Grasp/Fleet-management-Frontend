import "https://unpkg.com/navigo"  //Will create the global Navigo object used below
import {loadHtml, adjustForMissingHash, setActiveLink, renderTemplate} from "./utils.js"

import { initCreateBrand } from "./src/pages/create-brand/createBrand.js"
import { initAllBrands } from "./src/pages/all-brands/allBrands.js";
import { initLogin } from "./src/pages/login/login.js";
import {initColorMix} from "./src/pages/color/colorMix/colorMixFunctions.js"; //just made
import { initColorTypes } from "./src/pages/color/colorTypes/colorTypeFunctions.js"

window.addEventListener("load", async () => {
  const templateHome = await loadHtml("./src/pages/home/home.html")
  const templateCreateBrand = await loadHtml("./src/pages/create-brand/create-brand.html")
  const templateAllBrands = await loadHtml("./src/pages/all-brands/all-brands.html")
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

      "/create-brand": () => {
        renderTemplate(templateCreateBrand, "content")
        initCreateBrand()
      },
      "/all-brands": () => {
        renderTemplate(templateAllBrands, "content")
        initAllBrands()
      },
      "/login": () => {
        renderTemplate(templateLogin, "content")
        initLogin()
      },
      "/color-types": () => {
        renderTemplate(templateColorTypes, "content")
        initColorTypes(router)

      },
      "/color-mix": (match) => { //just made
        renderTemplate(templateColorMix, "content")
        initColorMix(router, match)
      }
    })
    .notFound(() => renderTemplate("No page for this route found", "content"))
    .resolve()
});})


//window.onerror = (e) => alert(e)