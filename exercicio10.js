// 10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2 Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo. 

// IMC em adultos Condição 
// Abaixo de 18,5 Abaixo do peso 
// Entre 18,5 e 25 Peso normal 
// Entre 25 e 30 Acima do peso
// Acima de 30 obeso

alert("Vamos calcular o seu IMC (indice de massa corporal). Para começar, clique em OK e insira os dados solicitados a seguir.")

var peso = parseFloat(prompt("Informe o seu peso (Ex: 86.5):"));

var altura = parseFloat(prompt("Informe a sua altura (Ex: 1.65):"));

var imc = peso / (altura * 2);

if (imc < 18.5) {

    alert("RESULTADO DO TESTE IMC" + "\n" + "Peso: " + peso + "\n" + "Altura: " + altura + "\n" + "Valor do IMC: " + imc + "\n" + "Condição: Abaixo do peso");

}

else if (imc >= 18.5 && imc < 25) {

    alert("RESULTADO DO TESTE IMC" + "\n" + "Peso: " + peso + "\n" + "Altura: " + altura + "\n" + "Valor do IMC: " + imc + "\n" + "Condição: Peso normal");

}

else if (imc >= 25 && imc <= 30) {

    alert("RESULTADO DO TESTE IMC" + "\n" + "Peso: " + peso + "\n" + "Altura: " + altura + "\n" + "Valor do IMC: " + imc + "\n" + "Condição: Acima do peso");

}

else if  (imc > 30){

    alert("RESULTADO DO TESTE IMC" + "\n" + "Peso: " + peso + "\n" + "Altura: " + altura + "\n" + "Valor do IMC: " + imc + "\n" + "Condição: Obeso(a)");
}