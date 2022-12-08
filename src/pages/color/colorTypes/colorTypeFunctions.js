import {rowHighlight} from "../../../js/modulLoad.js";

var URL = "http://localhost:8080/api/color-types"
let router;
let tableId = "table-body-test"

let colorTypes = []
let targetId

export async function initColorTypes(navigatorRouter) {
    getAllColorTypes()
    router = navigatorRouter

    document.getElementById("submit-new-color-type").onclick = () =>{
        addColorType();
    }

    document.getElementById(tableId).onclick = (element) =>{
        let id = element.target.id

        if(id.includes("-column-id")){
            targetId = id.replace("-column-id", "")
        }
    }



    document.getElementById("modal-content").onclick = (element) =>{
        let id = element.target.id

        if(id.includes("delete")){
            deleteColorType(targetId)
        }
        if(id.includes("edit")){
            router.navigate(`edit-color-types?id=${targetId}`)
        }
    }

    /*
    document.getElementById("table").ondblclick = (element) =>{
        let id = element.target.id
        if(id.includes("text")){
            changeTdToInput(id);
        }
        var el = document.getElementById(id);
        el.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                console.log("Enter clicked "  + id)
                let field = document.getElementById(id)
                field.readOnly = true
                editColorType(id)
            }
        });
    }

     */

}

function changeTdToInput(id){
    const field = document.getElementById(id)
    field.readOnly = false
}



async function getAllColorTypes() {
    document.getElementById(tableId).innerHTML = ""
    try{
        colorTypes = await fetch(URL).then(res => res.json());
        const tableRowsArray = colorTypes.map(
            (colorType) =>
                `
        <tr>
            <td>${colorType.type}</td>
          
             <td>
             <ul data-bs-toggle="modal" data-bs-target="#exampleModal" class="three-dots" >
                                    <li id="${colorType.id}-column-id"  class="three-dots__dot"></li>
                                    <li id="${colorType.id}-column-id"  class="three-dots__dot"></li>
                                    <li id="${colorType.id}-column-id"  class="three-dots__dot"></li>
                                    
             </ul>
            </td>
        `
        );
        const tableRowsString = tableRowsArray.join("\n");
        document.getElementById(tableId).innerHTML = tableRowsString;
        rowHighlight("table-body");

    } catch(err) {
        console.log(err);
    }
}


async function addColorType() {
    const type = document.getElementById("if1").value;
    const newColorType = {
        type
    };

    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newColorType),
    })
        .then((res) => res.json())
    //window.location.reload();
    if(response.ok){
        colorTypes.add(response)
    }
    getAllColorTypes()
}

async function deleteColorType(idToDelete) {
    var r = confirm("If you delete this Color Type all associated color mixes will be deleted.");
    if (r==true)
    {
        const response = await fetch(URL + "/" + idToDelete, {
            method: "DELETE",

        }).then((res) => res.json())
        if(response.ok){
            colorTypes = colorTypes.filter(type => type.id !== response.id);
        }
        getAllColorTypes()
    }
}

async function editColorType(idFromJs) {
    const id = idFromJs.split('text')[1]
    const type = document.getElementById(idFromJs).value;
    const editedColorType = {
        id,
        type
    };
    const data = await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedColorType),
    })
        .then((res) => res.json())
    if(document.getElementById(idFromJs).value === data.type){
        document.getElementById(idFromJs).style.boxShadow = "0px 0px 20px 1px #00FF00";
    }else {
        document.getElementById(idFromJs).style.boxShadow = "0px 0px 20px 1px #FF0000";
    }
    setTimeout( () =>{
        document.getElementById(idFromJs).style.boxShadow = "none";
    }, 2000);

}
