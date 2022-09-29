// 3) Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar. 


var num01 = parseInt(prompt("Insira um número para saber se ele é par ou impar:"));


if ((num01 % 2) == 0){

    alert("O número inserido foi: " + num01 + ". Ele é um número par.");
}

else{
  
    alert("O número inserido foi: " + num01 + ". Ele é um número impar.");
}