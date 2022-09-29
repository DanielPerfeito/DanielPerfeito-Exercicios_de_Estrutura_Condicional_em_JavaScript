// 2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos). 

var nome = prompt("Insira o seu nome:");

var sexo = prompt("Informe o seu sexo, (M) para masculino ou (F) para feminino):");

var estadoCivil = prompt("Informe o seu estado civil:")

// Ver execução no terminal.

if ((sexo == "f") && (estadoCivil == "casada")) {

    var tempoCasada = (prompt("Informe o seu tempo de casada (anos):"));

    alert("Nome: " + nome + "\n" + "Sexo: " + sexo + "\n" + "Estado Civil: " + estadoCivil + "\n" + "Tempo de Casada: " + tempoCasada);
}

else{
    alert("Nome: " + nome + "\n" + "Sexo: " + sexo + "\n" + "Estado Civil: " + estadoCivil);
}