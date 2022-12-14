import "https://unpkg.com/navigo"  //Will create the global Navigo object used below
import {loadHtml, adjustForMissingHash, setActiveLink, renderTemplate} from "./utils.js"


//Brand
import { initCreateBrand } from "./src/pages/create-brand/createBrand.js";

import { initAllBrands } from "./src/pages/all-brands/allBrands.js";
import {initEditBrand} from "./src/pages/edit-brand/editBrand.js";
import { initLogin } from "./src/pages/login/login.js";
import { initOwnerships} from "./src/pages/ownership/ownerships.js";
import { initCreateOwnership} from "./src/pages/ownership/create-ownership.js";

//Color
import { initColorTypes } from "./src/pages/color/colorTypes/colorTypeFunctions.js";
import {initColorMix} from "./src/pages/color/colorMix/colorMixFunctions.js";
import {initAddColorMix} from "./src/pages/color/addColorMix/addColorMixFunctions.js";
import {initEditColorTypes} from "./src/pages/color/colorTypes/editColorTypes.js";


//Users
import { initCreateAdminLogin } from "./src/pages/createLogins/userAdmin/adminLogin.js";
import { initGetAllAdminUsers } from "./src/pages/createLogins/userAdmin/allAdmins.js";

import { initCreateBuyerLogin } from "./src/pages/createLogins/userBuyer/buyerLogin.js";
import { initGetAllBuyerUsers } from "./src/pages/createLogins/userBuyer/allBuyers.js";
import { initEditBuyer } from "./src/pages/createLogins/userBuyer/editBuyer.js";

import { initCreateLeaserLogin } from "./src/pages/createLogins/userLeaser/leaserLogin.js";
import { initGetAllLeaserUsers } from "./src/pages/createLogins/userLeaser/allLeasers.js";
import { initEditLeaser } from "./src/pages/createLogins/userLeaser/editLeaser.js";

import { initCreateEconomyLogin } from "./src/pages/createLogins/userEconomy/economyLogin.js";
import { initGetAllEconomyUsers } from "./src/pages/createLogins/userEconomy/allEconomy.js";

import { initAllUserLogin } from "./src/pages/createLogins/allUsers/allUsersLogin.js";

//black list
import { initCreateBlackList } from "./src/pages/create-blacklist/createblackList.js";

window.addEventListener("load", async () => {
  const templateHome = await loadHtml("./src/pages/home/home.html")
  const templateCreateUser = await loadHtml("./src/pages/createLogins/createUser/createUser.html")
  const templateCreateBrand = await loadHtml("./src/pages/create-brand/create-brand.html")
  const templateAllBrands = await loadHtml("./src/pages/all-brands/all-brands.html")
  const templateEditBrand = await loadHtml("./src/pages/edit-brand/edit-brand.html")
  const templateLogin = await loadHtml("./src/pages/login/login.html")

  //color
  const templateColorMix = await loadHtml("./src/pages/color/colorMix/color-mix.html")
  const templateAddColorMix = await loadHtml("./src/pages/color/addColorMix/add-color-mix.html")
  const templateColorTypes = await loadHtml("./src/pages/color/colorTypes/color-types.html")
  const templateEditColorTypes = await loadHtml("./src/pages/color/colorTypes/edit-color-types.html")
  const templateOwnerships = await loadHtml("./src/pages/ownership/ownerships.html")
  const templateCreateOwnership = await loadHtml("./src/pages/ownership/create-ownership.html")


  //users
  const templateCreateAdminLogin = await loadHtml("./src/pages/createLogins/userAdmin/adminLogin.html")
  const templateCreateBuyerLogin = await loadHtml("./src/pages/createLogins/userBuyer/buyerLogin.html")
  const templateLeaserAll = await loadHtml("./src/pages/createLogins/userLeaser/allLeasers.html")
  const templateBuyerAll = await loadHtml("./src/pages/createLogins/userBuyer/allBuyers.html")
  const templateEconomyAll = await loadHtml("./src/pages/createLogins/userEconomy/allEconomy.html")
  const templateAdminAll = await loadHtml("./src/pages/createLogins/userAdmin/allAdmins.html")
  const templateLeaserLogin = await loadHtml("./src/pages/createLogins/userLeaser/leaserLogin.html")
  const templateEconomyLogin = await loadHtml("./src/pages/createLogins/userEconomy/economyLogin.html")
  const templateAllUsersLogin = await loadHtml("./src/pages/createLogins/allUsers/allUsersLogin.html")
  const templateEditBuyer = await loadHtml("./src/pages/createLogins/userBuyer/editBuyer.html")
  const templateEditLeaser = await loadHtml("./src/pages/createLogins/userLeaser/editLeaser.html")

  //black list
  const templateCreateBlackList = await loadHtml("./src/pages/create-blacklist/createBlackList.html")

  const router = new Navigo("/", { hash: true });
  window.router = router

  adjustForMissingHash()
  router
    .hooks({
      before(done, match) {
        setActiveLink("topnav", match.url)
        done()
      },
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
      "/users/create-user": () => renderTemplate(templateCreateUser, "content"),
      "/users/create-admin": () => {
        renderTemplate(templateCreateAdminLogin, "content")
        initCreateAdminLogin()
      },
      "/users/all-admins": () => {
        renderTemplate(templateAdminAll, "content")
        initGetAllAdminUsers()
      },
      "/create/black-list": () => {
        renderTemplate(templateCreateBlackList, "content")
        initCreateBlackList()
      },
      "/users/create-buyer": () => {
        renderTemplate(templateCreateBuyerLogin, "content")
        initCreateBuyerLogin()
      },
      "/users/all-buyers": (match) => {
        renderTemplate(templateBuyerAll, "content")
        initGetAllBuyerUsers(match,router)
      },
      "/users/edit-buyer": (match) => {
        renderTemplate(templateEditBuyer, "content")
        initEditBuyer(match)
      },
      "/users/create-leaser": () => {
        renderTemplate(templateLeaserLogin, "content")
        initCreateLeaserLogin()
      },
      "/users/all-leasers": (match) => {
        renderTemplate(templateLeaserAll, "content")
        initGetAllLeaserUsers(match,router)
      },
      "/users/edit-leaser": (match) => {
        renderTemplate(templateEditLeaser, "content")
        initEditLeaser(match)
      },
      "/users/create-economy": () => {
        renderTemplate(templateEconomyLogin, "content")
        initCreateEconomyLogin()
      },
      "/users/all-economy": () => {
        renderTemplate(templateEconomyAll, "content")
        initGetAllEconomyUsers()
      },
      "/users/all": () => {
        renderTemplate(templateAllUsersLogin, "content")
        initAllUserLogin()
      },
      "/login": () => {
        renderTemplate(templateLogin, "content")
        initLogin()
      },
      "/ownership": () => {
        renderTemplate(templateOwnerships, "content")
        initOwnerships(router)

      },
      "/create-ownership": () => {
        renderTemplate(templateCreateOwnership, "content")
        initCreateOwnership(router)

      },
      "/color-types": () => {
        renderTemplate(templateColorTypes, "content")
        initColorTypes(router)

      },
      "/edit-color-types": (match) => {
        renderTemplate(templateEditColorTypes, "content")
        initEditColorTypes(match)

      },
      "/color-mix/c-mix": (match) => { //just made
        renderTemplate(templateColorMix, "content")
        initColorMix(router, match)
      },
       "/color-mix/add": (match) => { //just made
         renderTemplate(templateAddColorMix, "content")
         initAddColorMix(router, match)
       },
      "/edit-brand":(match) =>{
        renderTemplate(templateEditBrand,"content")
        initEditBrand(match)
      }
    })
    .notFound(() => renderTemplate("No page for this route found", "content"))
    .resolve()
});


window.onerror = (e) => alert(e)