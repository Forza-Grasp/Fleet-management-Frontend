export const tokenInfo = {
    token: localStorage.getItem("token"),
    username: localStorage.getItem("user"),
    roles: localStorage.getItem("roles"),
    userId: localStorage.getItem("userId"),
    eMail: localStorage.getItem("eMail")
}

export async function checkTokenGet() {
    const options = {
        method: "GET",
        headers: { "Accept": "application/json" }
    };

    if (localStorage.getItem("token") == null) {
        return options;
    }
    //remove big if statement to begin the security process
    if (localStorage.getItem("token") !== null) {
        const token = localStorage.getItem("token")
        if (!token) {
            alert("You must login to use this feature")
            return
        }
        options.headers.Authorization = "Bearer " + token
    }

    return options;
}

export async function checkTokenPost(object) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(object)
    };
    if (localStorage.getItem("token") == null) {
        return options;
    }
    //remove big if statement to begin the security process
    if (localStorage.getItem("token") !== null) {
        const token = localStorage.getItem("token")
        if (!token) {
            alert("You must login to do this feature")
            return
        }
        options.headers.Authorization = "Bearer " + token
    }

    return options;
}

export async function checkTokenPatch(object) {
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(object)
    };
    if (localStorage.getItem("token") == null) {
        return options;
    }
    //remove big if statement to begin the security process
    if (localStorage.getItem("token") !== null) {
        const token = localStorage.getItem("token")
        if (!token) {
            alert("You must login to do this feature")
            return
        }
        options.headers.Authorization = "Bearer " + token
    }
    return options;
}

export async function checkTokenPut(object) {
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(object)
    };
    if (localStorage.getItem("token") == null) {
        return options;
    }
    //remove big if statement to begin the security process
    if (localStorage.getItem("token") !== null) {
        const token = localStorage.getItem("token")
        if (!token) {
            alert("You must login to do this feature")
            return
        }
        options.headers.Authorization = "Bearer " + token
    }

    return options;
}

export async function checkTokenDelete() {
    const options = {
        method: "DELETE",
        headers: { "Accept": "application/json" }
    };

    if (localStorage.getItem("token") == null) {
        return options;
    }
    //remove big if statement to begin the security process
    if (localStorage.getItem("token") !== null) {
        const token = localStorage.getItem("token")
        if (!token) {
            alert("You must login to use this feature")
            return
        }
        options.headers.Authorization = "Bearer " + token
    }

    return options;
}

export function checkRoleBuyer() {

    if (tokenInfo.roles === null) {

        const divs = document.querySelectorAll('.buyer-view');
        divs.forEach(div => {
            div.style.display = "none";
        });

    } else if (tokenInfo.roles.split(",")[0] === "BUYER") {

        const divs = document.querySelectorAll('.buyer-view');
        divs.forEach(div => {
            div.style.display = "block";
        });

    } else if (tokenInfo.roles.split(",")[0] !== "BUYER") {

        const divs = document.querySelectorAll('.buyer-view');
        divs.forEach(div => {
            div.style.display = "none";
        });

    }


}

export function checkRoleLeaser() {

    if (tokenInfo.roles === null) {

        const divs = document.querySelectorAll('.buyer-view');
        divs.forEach(div => {
            div.style.display = "none";
        });

    } else if (tokenInfo.roles === "LEASER") {

        const divs = document.querySelectorAll('.leaser-view');
        divs.forEach(div => {
            div.style.display = "block";
        });

    } else if (tokenInfo.roles !== "LEASER") {

        const divs = document.querySelectorAll('.leaser-view');
        divs.forEach(div => {
            div.style.display = "none";
        });

    }


}

export function checkRoleEconomy() {

    if (tokenInfo.roles === null) {

        const divs = document.querySelectorAll('.buyer-view');
        divs.forEach(div => {
            div.style.display = "none";
        });

    } else if (tokenInfo.roles === "ECONOMY") {

        const divs = document.querySelectorAll('.economy-view');
        divs.forEach(div => {
            div.style.display = "block";
        });

    } else if (tokenInfo.roles !== "ECONOMY") {

        const divs = document.querySelectorAll('.economy-view');
        divs.forEach(div => {
            div.style.display = "none";
        });

    }


}

export function checkRoleAdmin() {
    if (tokenInfo.roles === null) {

        const divs = document.querySelectorAll('.admin-view');
        divs.forEach(div => {
            div.style.display = "none";
        });

    } else if (tokenInfo.roles === "ADMIN") {

        const divs = document.querySelectorAll('.admin-view');
        divs.forEach(div => {
            div.style.display = "block";
        });

    } else if (tokenInfo.roles !== "ADMIN") {

        const divs = document.querySelectorAll('.admin-view');
        divs.forEach(div => {
            div.style.display = "none";
        });

    }


}
export function checkAllRoles() {
    if (tokenInfo.roles === null) {
        const divs = document.querySelectorAll('.all-roles');
        divs.forEach(div => {
            div.style.display = "none";
        });
    }
    else if (tokenInfo.roles !== null) {
        const divs = document.querySelectorAll('.all-roles');
        divs.forEach(div => {
            div.style.display = "block";
        });
    }
}