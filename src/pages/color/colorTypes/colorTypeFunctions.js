var URL = "http://localhost:8080/api/color-types"
let router;

export function initColorTypes(navigoRouter) {

    document.getElementById("submit").onclick = getAllColorMixes;
    router = navigoRouter
}



async function getAllColorMixes() {
    try{
        const data = await fetch(URL).then(res => res.json());
        const tableRowsArray = data.map(
            (colorMix) =>
                `
        <tr>
            <td>${colorMix.id}</td>
            <td>${colorMix.colorName}</td>
            <td>${colorMix.colorCode}</td>
            <td>${colorMix.colorTypeId}</td>
        `
        );
        const tableRowsString = tableRowsArray.join("\n");
        document.getElementById("tbody-all").innerHTML = tableRowsString;
    } catch(err) {
        console.log(err);
    }
}

/*
async function deleteColorMix() {
    const id = document.getElementById("if1").value;
    URL = URL + "/" + id
    console.log(URL)
    await fetch(URL, {
        method: "DELETE",

    }).then((res) => res.json()).then
}

 */

/*
async function editColorMix() {
    const colorMixId = document.getElementById("if4").value;
    const colorCode = document.getElementById("if1").value;
    const colorName = document.getElementById("if2").value;
    const colorTypeId = document.getElementById("if3").value;

    const editedColorMix = {
        colorMixId,
        colorCode,
        colorTypeId,
        colorName
    };

    console.log(editedColorMix)
    const id = await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedColorMix),
    })
        .then((res) => res.json())
}
*/

/*
async function addColorMix() {
    const colorCode = document.getElementById("if1").value;
    const colorName = document.getElementById("if2").value;
    const colorTypeId = document.getElementById("if3").value;

    const newColorMix = {
        colorCode,
        colorTypeId,
        colorName
    };
    console.log(newColorMix)

    const id = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newColorMix),
    })
        .then((res) => res.json())
}
*/