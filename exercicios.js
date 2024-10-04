


/*
1º Exercicio.

alert('Boas vindas ao nosso site');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponível = 1000;
//alert('Erro! Preencha todos os campos');
let mensagemDeErro = 'Erro! Preencha todos os campos';

let nomeUser = prompt("Qual o seu nome?")
let idadeUser = prompt("Qual a sua idade?")

if(idadeUser >= 18){
  alert("Olá " + nomeUser + " Você está apto para tirar a CNH");
} else {
  alert("Ainda não está apto para tirar a carteira")
}
*/

/// Exercio 2

//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
/*
let diaDaSemana = prompt("Qual o dia da Semana?");
if(diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
  alert("Bom fim de semana")
} else {
  alert("Boa semana!");
}

*/

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
/*
let verificaNumero = prompt("Digite um número: ");
verificaNumero = Number(verificaNumero)
if(verificaNumero > 0){
  alert(`O número ${verificaNumero} é positivo`)
} else if (verificaNumero < 0){
  alert (`O número ${verificaNumero} é negativo`)
} else {
  alert(`O número é zero`);
}
*/

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
/*
let pontuacaoJogo = 99;
if(pontuacaoJogo >= 100) {
  alert("Parabéns, você venceu")
} else {
  alert("Tente novamente para Ganhar!")
}
*/

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

/*
let saldoConta = 1000;
alert(`Seu saldo é R$${saldoConta}`);
*/

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

/*
let nomeUser2 = prompt("Qual o seu nome?");

alert(`Boas-Vindas ${nomeUser2}`);

*/

// 3º Exercicio



//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while(contador < 10) {
  contador++
  //console.log(contador)
}

let contador2 = 10 
while(contador2 >= 1) {
  contador2--
  //console.log(contador2);
} 

let contador3 = 50;
while(contador3 >= 1) {
  contador3--
  //console.log(`Contagem regressiva ${contador3}`);
}

let contador4 = 0;
while(contador4 < 50) {
  contador4++
  //console.log(`Contagem progressiva ${contador4}`);
}

//console.log("Olá")

// Exerc 4ª 
// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log("Boas-vindas");

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

//let nome = "Matheus";
//console.log(`Olá, ${nome}!`); 

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

//let nome = "Matheus";
//alert(`Olá, ${nome}!`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

//let qualLinguagem = prompt("Qual a linguagem de programação que você mais gosta?");
//console.log(`A linguagem que você mais gosta é ${qualLinguagem}`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

//let valor1 = 20;
//let valor2 = 30;
//let resultado = valor1 + valor2;

//console.log(`A soma de ${valor1} e ${valor2} é igual ${resultado}`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

//let valor1 = 500;
//let valor2 = 200;
//let resultado = valor1 - valor2;

//console.log(`A subtração de ${valor1} e ${valor2} é igual ${resultado}`);

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

/*
let idade = prompt("Qual a sua idade?");

if(idade >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}

*/

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

/*
let numero = prompt("Digite um número: ");
if(numero > 0){
  console.log(`O número ${numero} digitado é positivo`)
} else if (numero < 0) {
  console.log(`O número ${numero} digitado é negativo`)
} else {
  console.log('O número é zero');
}

*/

// Use um loop while para imprimir os números de 1 a 10 no console.

let contador5 = 0;
while(contador5 < 10){
  contador5++
  //console.log(contador5);
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 5;
let aprovacao = nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(aprovacao)

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

console.log(Math.random());

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

console.log(parseInt(Math.random() * 10)) + 1 

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

console.log(parseInt(Math.random() * 1000)) + 1;