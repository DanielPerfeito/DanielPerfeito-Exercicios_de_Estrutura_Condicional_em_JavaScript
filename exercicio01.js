
// 01 - Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.

var a = parseFloat(prompt("Insira um valor numérico para 'A':"));

var b = parseFloat(prompt("Insira um valor numérico para 'B':"));

var c = parseFloat(prompt("Insira um valor númérico para 'C':"));

soma = a + b;

if (soma > c){
    alert("Valores ineridos: A = " + a + " | B = " + b + " | C = " + c + "." + "\n" + "A soma de 'A' e 'B' é " + soma + ", E é maior do que o valor de 'C'.");
}

else if (soma == c){
    alert("Valores ineridos: A = " + a + " | B = " + b + " | C = " + c + "." + "\n" + "A soma de 'A' e 'B' é " + soma + ", E é igual ao valor de 'C'.");
}

else {
    alert("Valores ineridos: A = " + a + " | B = " + b + " | C = " + c + "." + "\n" + "A soma de 'A' e 'B' é " + soma + ", E é menor do que o valor de 'C'.");
}
