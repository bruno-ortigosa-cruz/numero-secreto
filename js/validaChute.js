const principal = document.getElementById("container-principal")

function validaChute(chute) {
    const numero = +chute

    if (chute == "game over") { 
        principal.innerHTML = `
            <div class="principal">
                <h2 class="titulo"><i class="fa-solid fa-skull fa-shake"></i> Game Over! <i class="fa-solid fa-skull fa-shake"></i></h2>
                <h3 class="subtitulo">O número secreto era ${numeroSecreto}</h3>
                <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            </div>
        `
        over = true
    }

    if (chuteForInvalido(numero) && chute != "número secreto") {
        elementoChute.innerHTML += "<div>Valor inválido: não é um número</div>"

        return
    } else if (numeroNaoInteiro(numero) && chute != "número secreto") {
        elementoChute.innerHTML += "<div>Valor inválido: não é um número inteiro</div>"

        return
    }
    if (numeroForaDoRange(numero)) {
        elementoChute.innerHTML += `
            <div>Valor inválido: fora do escopo, o chute precisa ser entre ${menorValor} e ${maiorValor}</div>
        `

        return
    }
    if (numero === numeroSecreto) {
        principal.innerHTML = `
            <div class="principal">
                <h2 class="titulo"><i class="fa-regular fa-star fa-bounce"></i>Você Acertou!<i class="fa-regular fa-star fa-bounce"></i></h2>
                <h3 class="subtitulo">O número secreto era ${numeroSecreto}</h3>
                <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            </div>
        `
        over = true
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
            <span class="texto"><br>O número secreto é maior <i class="fa-solid fa-arrow-up-long fa-bounce"></i></span>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <span class="texto"><br>O número secreto é menor <i class="fa-solid fa-arrow-down-long fa-bounce"></i></span>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaDoRange(numero) {
    return numero > maiorValor || numero < menorValor
}

function numeroNaoInteiro(numero) {
    return !Number.isInteger(numero)
}

document.body.addEventListener('click', evento => {
    if (evento.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})