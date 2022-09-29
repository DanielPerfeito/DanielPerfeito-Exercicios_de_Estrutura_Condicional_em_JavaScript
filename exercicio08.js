// 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente.


var valor1 = parseInt(prompt("Insira um valor:"));

var valor2 = parseInt(prompt("Insira um seguindo valor diferente do anterior:"));

var valor3 = parseInt(prompt("insira um terceiro valor diferente dos anteriores:"));

if( (valor1 > valor2) && (valor2 > valor3)){

    alert("Em ordem decrescente, estes foram os valores digitados: " + valor1 + ", " + valor2 + " e " + valor3 + ".");
}

else if ((valor1 > valor3) && (valor3 > valor2)){

    alert("Em ordem decrescente, estes foram os valores digitados: " + valor1 + ", " + valor3 + " e " + valor2 + ".");
}

else if ((valor2 > valor1) && (valor1 > valor3)){

    alert("Em ordem decrescente, estes foram os valores digitados: " + valor2 + ", " + valor1 + " e " + valor3 + ".");
}

else if ((valor2 > valor3) && (valor3 > valor1)){

    alert("Em ordem decrescente, estes foram os valores digitados: " + valor2 + ", " + valor3 + " e " + valor1 + ".");
}

else if ((valor3 > valor1) && (valor1 > valor2)){

    alert("Em ordem decrescente, estes foram os valores digitados: " + valor3 + ", " + valor1 + " e " + valor2 + ".");
}

else if ((valor3 > valor2) && (valor2 > valor1)){

    alert("Em ordem decrescente, estes foram os valores digitados: " + valor3 + ", " + valor2 + " e " + valor1 + ".");
}
