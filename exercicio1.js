//Exercícios//
console.log("Exercícios de Arrow Functions e Higher-Order Functions\n")
// Exercício 1 //
const dobro = (a) => a * 2;
console.log("Dobro:");
console.log("Dobro de 7: " + dobro(7));
console.log("Dobro de 15: " + dobro(15));

// Exercício 2 //
console.log("\nDivisão:");
const dividir = (a,b) => a / b;
console.log("10/2 =" + (10,2));
console.log("9/3=" + dividir(9,3));

// Exercício 3 //
console.log("\nMensagem de Boas-Vindas:")
const mensagemBoasVindas = (nome) => {
    return `Seja bem-vindo, ${nome}!`;
}
console.log("-" + mensagemBoasVindas("Márcio"))
console.log("-" + mensagemBoasVindas("Jéssica"))

//Exercício 4//
console.log("\nOperações")
const executarOperacao = (a, b, operacao) => operacao(a, b);
console.log(executarOperacao(6, 3, (a, b) => a - b));
console.log(executarOperacao(4, 5, (a, b) => a * b));

//Exercício 5//
console.log("\nDesconto 10%:")
const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(num => num*0.9);
console.log("Preço inicial: [100, 200, 300, 400]");
console.log("Preço -10%" + precosComDesconto);

//Exercício 6//
console.log("\nMenores de idade:")
const idades = [12, 25, 17, 30, 14, 19];
const menoresDeIdade = idades.filter(idade => idade <=18);
console.log("Todos: [12, 25, 17, 30, 14, 19]")
console.log("Menores" + menoresDeIdade);

//Exercício 7//
console.log("\nMultiplicando lista:")
const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((total,num) => total * num, 1);
console.log("Números: [2, 3, 4, 5]")
console.log("Produto:" + produto);