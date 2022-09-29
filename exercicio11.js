// 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento 
// 1 À vista em dinheiro ou cheque, recebe 15% de desconto 
// 2 À vista no cartão de crédito, recebe 10% de desconto 
// 3 Em duas vezes, preço normal de etiqueta sem juros 
// 4 Em três vezes, preço normal de etiqueta mais juros de 10%


var preço = parseFloat(prompt("Informe o valor da etiqueta do produto escolhido (Ex: 10.00):"));

var valorFinal



var formaPagamento = prompt("FORMA DE PAGAMENTO" + '\n' + "\n" + "Digite o número correspondente a forma de pagamento desejada:" + "\n" + "\n" + "[1] À vista em dinheiro ou débito (Recebe 15% de desconto)" + "\n" + "[2] À vista no cartão de crédito,(Recebe 10% de desconto)" + "\n" + "[3] Em duas vezes (Preço normal de etiqueta sem juros)" + "\n" + "[4] Em três vezes (Preço normal de etiqueta mais juros de 10%)" + "\n");

switch (formaPagamento) {

    case "1":

        valorFinal = preço - (preço * (15 / 100))

        alert("RESUMO DA COMPRA" + "\n" + "\n" + "Forma de pagamento: À vista" + "\n" + "Desconto: 15% " + "\n" +  "Valor do produto: R$ " + preço + "\n" + "Valor final a pagar: R$ " + valorFinal )
        
        break

    case "2":

        valorFinal = preço - (preço * (10 / 100))

        alert("RESUMO DA COMPRA" + "\n" + "\n" + "Forma de pagamento: À vista no cartão de crédito" + "\n" + "Desconto: 10% " + "\n" +  "Valor do produto: R$ " + preço + "\n" + "Valor final a pagar: R$ " + valorFinal);
        
        break

    case "3":

        valorFinal = preço

        alert("RESUMO DA COMPRA" + "\n" + "\n" + "Forma de pagamento: Parcelado em (2x)" + "\n" + "Desconto: Não aplicável" + "\n" +  "Valor do produto: R$ " + preço + "\n" + "Valor das parcelas (2x): R$ " + valorFinal / 2 + "\n" +  "Valor final a pagar: R$ " + valorFinal);

        break

    case "4":
        valorFinal = preço + (preço * (10 / 100))

        alert("RESUMO DA COMPRA" + "\n" + "\n" + "Forma de pagamento: Parcelado em (3x)" + "\n" + "Juros: 10%" + "\n" +  "Valor do produto: R$ " + preço + "\n" + "Valor das parcelas (3x): R$ " + valorFinal / 3 + "\n" +  "Valor final a pagar: R$ " + valorFinal);

        break

    default:
        alert("Opção invalida!")
        break
}
