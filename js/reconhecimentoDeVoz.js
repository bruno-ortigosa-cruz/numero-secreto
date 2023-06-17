const elementoChute = document.getElementById("chute")

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

var microfone = true

recognition.lang = "pt-Br"
recognition.start()


recognition.addEventListener('end', () => {
    if (!over && microfone === true) {
        recognition.start()
    }
})

recognition.addEventListener('result', onSpeak)

function onSpeak(evento) {
    const chute = evento.results[0][0].transcript
    exibeChute(chute)
    validaChute(chute)
}

function exibeChute(chute) {
    if (chute === "número secreto") {
        elementoChute.innerHTML = `
            <div>Número Secreto:</div>
            <span class="box">${numeroSecreto}</span>
            <div>Shhh... Você nunca ouviu isso de mim!</div>
        `
    } else {
        elementoChute.innerHTML = `
            <div>Você disse:</div>
            <span class="box">${chute}</span>
        `
    }
    
}

