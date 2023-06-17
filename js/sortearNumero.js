var over = false
const menorValor = 0
const maiorValor = 100

const numeroSecreto = geraNumeroAleatorio(menorValor, maiorValor)

function geraNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById("maior-valor")
elementoMaiorValor.innerHTML = maiorValor