const micOn = document.getElementById("mic-on")
const micOff = document.getElementById("mic-off")

micOn.style.display = "block"

micOn.addEventListener('click', () => {
    micOn.style.display = "none"
    micOff.style.display = "block"
    if (!over) {
        microfone = false
        console.log(microfone)
        recognition.abort()
    }
})

micOff.addEventListener('click', () => {
    micOff.style.display = "none"
    micOn.style.display = "block"
    if (!over) {
        microfone = true
        console.log(microfone)
        recognition.start()
    }
})