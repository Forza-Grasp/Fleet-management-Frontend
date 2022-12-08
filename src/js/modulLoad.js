export function rowHighlight(tableId) {
    document.getElementById(tableId).onclick = (element) => {
        let id = element.target.id
        if (id.endsWith("-column-id")) {
            // the clicked row
            let row = document.getElementById(id).closest("tr")
            // the other rows
            let rows = document.getElementById(tableId).children
            for (let i = 0; i < rows.length; i++) {
                if (rows[i] !== row) {
                    rows[i].style.opacity = "0.5"
                }
            }
        }

    }


    document.getElementById("exampleModal").addEventListener("hidden.bs.modal", () => {
            let rows = document.getElementById("table-body").children
            for (let i = 0; i < rows.length; i++) {
                rows[i].style.opacity = "1"
            }

        }
    )
}

export function rowHighlightAdmin() {
    document.getElementById("admin-users-tbody").onclick = (element) => {
        let id = element.target.id
        if (id.endsWith("-column-id")) {
            // the clicked row
            let row = document.getElementById(id).closest("tr")
            // the other rows
            let rows = document.getElementById("admin-users-tbody").children
            for (let i = 0; i < rows.length; i++) {
                if (rows[i] !== row) {
                    rows[i].style.opacity = "0.5"
                }
            }
        }


    }

    document.getElementById("admin-menu").onclick = () => {
        let button = document.getElementById("admin-user-table")
        let buttons = document.getElementById("buttons-children").children
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i] !== button) {
                buttons[i].style.background = "#979797"

            }
        }

        button.classList.add("filter-tabs__tab-links--focus")
    }


    document.getElementById("exampleModalAdmin").addEventListener("hidden.bs.modal", () => {
            let rows = document.getElementById("admin-users-tbody").children
            for (let i = 0; i < rows.length; i++) {
                rows[i].style.opacity = "1"
            }
            let buttons = document.getElementById("buttons-children").children
            for (let i = 0; i < buttons.length; i++) {

                buttons[i].style.background = "#ffffff"
                buttons[i].classList.remove("filter-tabs__tab-links--focus")
            }

        }
    )
}

export function rowHighlightEconomy() {
    document.getElementById("economy-users-tbody").onclick = (element) => {
        let id = element.target.id
        if (id.endsWith("-column-id")) {
            // the clicked row
            let row = document.getElementById(id).closest("tr")
            // the other rows
            let rows = document.getElementById("economy-users-tbody").children
            for (let i = 0; i < rows.length; i++) {
                if (rows[i] !== row) {
                    rows[i].style.opacity = "0.5"
                }
            }
        }


    }
    document.getElementById("economy-menu").onclick = () => {
        let button = document.getElementById("economy-user-table")
        let buttons = document.getElementById("buttons-children").children
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i] !== button) {
                buttons[i].style.background = "#979797"

            }
        }

        button.classList.add("filter-tabs__tab-links--focus")
    }



    document.getElementById("exampleModalEconomy").addEventListener("hidden.bs.modal", () => {
            let rows = document.getElementById("economy-users-tbody").children
            for (let i = 0; i < rows.length; i++) {
                rows[i].style.opacity = "1"
            }
            let buttons = document.getElementById("buttons-children").children
            for (let i = 0; i < buttons.length; i++) {

                buttons[i].style.background = "#ffffff"
                buttons[i].classList.remove("filter-tabs__tab-links--focus")
            }

        }
    )
}

export function rowHighlightLeaser() {
    document.getElementById("leaser-users-tbody").onclick = (element) => {
        let id = element.target.id
        if (id.endsWith("-column-id")) {
            // the clicked row
            let row = document.getElementById(id).closest("tr")
            // the other rows
            let rows = document.getElementById("leaser-users-tbody").children
            for (let i = 0; i < rows.length; i++) {
                if (rows[i] !== row) {
                    rows[i].style.opacity = "0.5"
                }
            }
        }


    }
    document.getElementById("leaser-menu").onclick = () => {
        let button = document.getElementById("leaser-user-table")
        let buttons = document.getElementById("buttons-children").children
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i] !== button) {
                buttons[i].style.background = "#979797"

            }
        }

        button.classList.add("filter-tabs__tab-links--focus")
    }


    document.getElementById("exampleModalLeaser").addEventListener("hidden.bs.modal", () => {
            let rows = document.getElementById("leaser-users-tbody").children
            for (let i = 0; i < rows.length; i++) {
                rows[i].style.opacity = "1"
            }

            let buttons = document.getElementById("buttons-children").children
            for (let i = 0; i < buttons.length; i++) {

                buttons[i].style.background = "#ffffff"
                buttons[i].classList.remove("filter-tabs__tab-links--focus")
            }


        }
    )
}

export function rowHighlightBuyer() {
    document.getElementById("buyer-users-tbody").onclick = (element) => {
        let id = element.target.id
        if (id.endsWith("-column-id")) {
            // the clicked row
            let row = document.getElementById(id).closest("tr")
            // the other rows
            let rows = document.getElementById("buyer-users-tbody").children
            for (let i = 0; i < rows.length; i++) {
                if (rows[i] !== row) {
                    rows[i].style.opacity = "0.5"
                }
            }


        }


    }

    document.getElementById("buyer-menu").onclick = (element) => {
        let button = document.getElementById("buyer-user-table")
        let buttons = document.getElementById("buttons-children").children
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i] !== button) {
                buttons[i].style.background = "#979797"

            }
        }

        button.classList.add("filter-tabs__tab-links--focus")
    }



    document.getElementById("exampleModalBuyer").addEventListener("hidden.bs.modal", () => {
            let rows = document.getElementById("buyer-users-tbody").children
            for (let i = 0; i < rows.length; i++) {
                rows[i].style.opacity = "1"
            }

            let buttons = document.getElementById("buttons-children").children
            for (let i = 0; i < buttons.length; i++) {

                buttons[i].style.background = "#ffffff"
                buttons[i].classList.remove("filter-tabs__tab-links--focus")
            }

        }
    )
}