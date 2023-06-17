const sol = document.getElementById("sol-container")
const lua = document.getElementById("lua-container")
const darkModeSave = localStorage.getItem("dark-mode") || "off"

if (darkModeSave === "on") {
    document.body.classList.add("dark-mode")
    lua.style.display = "block"
} else {
    sol.style.display = "block"
}

sol.addEventListener('click', () => {
    toggle(sol, lua)
    localStorage.setItem("dark-mode", "on")
})

lua.addEventListener('click', () => {
    toggle(lua, sol)
    localStorage.setItem("dark-mode", "off")
})

function toggle(paraSumir, paraAparecer) {
    paraSumir.style.display = "none";
    document.body.classList.toggle('dark-mode')
    paraAparecer.style.display = "block"
}
