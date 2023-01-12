const menuToggle = document.querySelector("#menu-toggle")
const clickAway = document.querySelector("#sidebar-click-away")
const sidebar = document.querySelector("#sidebar")

menuToggle.addEventListener("click", () =>{
    sidebar.className = "show-sidebar"
    clickAway.className = "show-click-away"
})

clickAway.addEventListener("click", () =>{
    sidebar.className = ""
    clickAway.className = ""
})