import { SERVER_URL } from "../../../../../settings.js";
import {checkTokenPost,checkRoleAdmin,checkTokenGet,checkTokenDelete } from "../../../../js/loginSettings.js";
import { handleHttpErrors } from "../../../../../utils.js";

let DAMAGE_URL = SERVER_URL + "/specificDamage";


export async function initAddSpecificDamage(){
    checkRoleAdmin();
    document.getElementById("specific-damage-create-btn").onclick = addDamage;
}

async function addDamage(){
    let damage = document.getElementById("damage-input")
    let price = document.getElementById("price-input")
    let matrixId = document.getElementById("damage-matrix-id-input")

    const damageObject = {
        damage: damage.value,
        price: price.value,
        matrixId: matrixId.value
    };

    const damageRes = await fetch(DAMAGE_URL,await checkTokenPost(damageObject)).then(res => handleHttpErrors(res))

    document.getElementById("response-text-damage").innerText = "Damage added to damage matrix damage: " + damageRes.damages;
}

export async function getSpecificDamageByMatrixId(matrixId){
    return await fetch(DAMAGE_URL + "/damageMatrix/" + matrixId, await checkTokenGet()).then(res => handleHttpErrors(res));
}

export async function deleteSpecificDamageById(damageId){
    return await fetch(DAMAGE_URL + "/" + damageId, await checkTokenDelete()).then(res => handleHttpErrors(res));
}