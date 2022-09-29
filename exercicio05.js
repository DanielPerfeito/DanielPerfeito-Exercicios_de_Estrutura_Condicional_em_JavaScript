// 5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado

var num = parseInt(prompt("Insira um valor numérico positivo ou negativo: "))

if (num >= 0){
    
    alert("Você inseriu o número: " + num + "\n" + " Ele é um número positivo e o seu dobro é: " + (num = num * 2));
}

else {

    alert("Você inseriu o número: " + num + "\n" + " Ele é um número negativo e o seu dobro é: " + (num = num * 3));
}
