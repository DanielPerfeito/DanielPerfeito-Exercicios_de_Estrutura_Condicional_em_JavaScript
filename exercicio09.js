// 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas: 
// ● para homens: (72.7 * h) – 58; 
// ● para mulheres: (62.1 * h) – 44.7.

var altura = parseFloat(prompt("Informe a sua altura (Ex: 1.75): "));

var sexo = prompt("Informe o seu sexo." + "\n" + "Digite [1] para Masculino ou [2] para Feminino: ");

switch (sexo) {

    case "1":

        sexo = "Masculino";

        var pesoIdeal = (72.7 * altura) - 58;

        alert("RESUSTADO DO TESTE" + "\n" + "Altura: " + altura + "\n" + "Sexo: " + sexo + "\n" + "Peso Ideal: " + pesoIdeal);

        break


    case "2":

        sexo = "Feminino";

        var pesoIdeal = (61.1 * altura) - 44.7;

        alert("RESUSTADO DO TESTE" + "\n" + "Altura: " + altura + "\n" + "Sexo: " + sexo + "\n" + "Peso Ideal: " + pesoIdeal);

        break

    default:

        prompt("O valor inserido é invalido!");
        
        break

}