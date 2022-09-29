// 7) Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, imprimir o resultado desta operação. 

var valor = parseInt(prompt("Olá! Insira um valor. Caso o valor informado seja par, o mesmo será somado a 5, caso seja impar, será somado a 8."));


if((valor % 2) == 0){

    var resultado = valor + 5;

    alert("O número que você inseriu é " + valor + " ele é par, e somado a 5 resulta em " + resultado + ".");
}

else{

    var resultado = valor + 8;

    alert("O número que você inseriu é " + valor + " ele é impar, e somado a 8 resulta em " + resultado + ".");
}
