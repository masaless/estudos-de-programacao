
// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function verificarConsole() {
 console.log('O Botão foi clicado!!');
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function verificarAlerta() {
  alert('Eu amo JS');
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function verificarPrompt() {
  let cidadeDoBrasil = prompt("Digite uma cidade do Brasil");
  alert(`Estive em ${cidadeDoBrasil} e lembrei de você!!`)
} 

// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta. 

function verificarSoma() {
  let valor1 = Number(prompt("Digite um número"));
  let valor2 = Number(prompt("Digite outro número"));
  let resultado = valor1 + valor2; 
  alert(`A soma do ${valor1} + ${valor2} é igual ${resultado}`)
}


