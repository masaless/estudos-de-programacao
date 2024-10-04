alert("Boas Vindas ao jogo do número secreto");


let = numeroRandom = 500;
let numeroSecreto = parseInt(Math.random() * numeroRandom + 1);
let numeroDigitadoPeloUsuario = null;
let tentativas = 1;

while (numeroDigitadoPeloUsuario !== numeroSecreto) {
  numeroDigitadoPeloUsuario = Number(prompt(`Digite um número entre 1 e ${numeroRandom}`));
  if (numeroDigitadoPeloUsuario == numeroSecreto) {
    break;
  } else if (numeroDigitadoPeloUsuario < numeroSecreto) {
    alert("Tente um número maior");
  } else {
    alert("Tente um número menor");  
  } 
  tentativas++
}

let palavraTentiva = tentativas > 1 ? 'Tentativas' : 'Tentitiva'; 
alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentiva}`);

