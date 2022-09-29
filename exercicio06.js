// 6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.

var valor01 = parseInt(prompt(" valor 1 - Digite [1] para verdadeiro ou [0] para falso:"))

switch (valor01) {

    case 1:
        valor01 = true
        break;

    case 0:
        valor01 = false
        break;

    default:
        console.log("Valor Invalido!")
        break;
}

console.log(valor01)


var valor02 = parseInt(prompt(" valor 2 - Digite [1] para verdadeiro ou [0] para falso:"))

switch (valor02) {

    case 1:
        valor02 = true
        break;

    case 0:
        valor02 = false
        break;

    default:
        console.log("Valor Invalido!")
        break;
}

console.log(valor02)

var resultado

if (valor01 || valor02 == true) {

    resultado = "Verdadeiro"

    console.log("O resultado para os valores digitado é " + resultado + "!")
}

else {

    resultado = "Falso"

    console.log("O resultado para os valores digitado é " + resultado + "!")
}
