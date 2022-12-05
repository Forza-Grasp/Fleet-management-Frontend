import { checkRoleAdmin,checkTokenPost,checkTokenGet,checkTokenDelete,checkTokenPut } from "../../../js/loginSettings.js";
import { handleHttpErrors } from "../../../../utils.js";
import { getUserBuyerCompanyName } from "../../createLogins/allUsers/allUsersLogin.js";
import { SERVER_URL } from "../../../../settings.js";
let MATRIX_URL = SERVER_URL + "/damageMatrix";



export async function initDamageMatrix(){
    checkRoleAdmin();
    document.getElementById("damageMatrix-create-btn").onclick = createDamageMatrix;
}

export async function createDamageMatrix(){

    let userId = document.getElementById("buyer-id-input")
    let valuta = document.getElementById("valuta-input")

    console.log(userId.value)
    console.log(valuta.value)


    const damageMatrix = {
        userId: userId.value,
        valuta: valuta.value
    };

    const damageMatrixRes = await fetch(MATRIX_URL,await checkTokenPost(damageMatrix)).then(res => handleHttpErrors(res))

    document.getElementById("response-text-damage-matrix").innerHTML = "Damage matrix created for user: " + await getUserBuyerCompanyName(damageMatrixRes.userId);
}



























