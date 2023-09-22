// Ao iniciar a página, será sorteado um número de 1 a 25
// O usuário irá clicar em um dos blocos do grid no código HTML

// Se o id ou value for diferente do número sorteado
// Um alert vai aparecer mostrando as chances que o usuário tem de acertar de acordo com os bloco disponíveis para tentativa
// O bloco grid que foi clicado será apagado após o alert aparecer e o usuário poderá escolher novamente

// Se o id ou value for igual ao número sorteado
// Um alert irá aparecer mostrando as chances que o usuário tinha de acertar de acordo com o número de blocos disponíveis para tentativa


function sortearNumero() {
    return Math.floor(Math.random() * 2) + 1;
  }
 
  console.log(sortearNumero());

  function verificarBotaoClicado(event) {
    const numeroSorteado = sortearNumero();
    const botaoClicado = event.target.id;
    
    if (botaoClicado == "botao" + numeroSorteado) {
      console.log("Parabéns! Você acertou o botão correto.");
    } else {
      console.log("Ops! Tente novamente.");
    }
  }
  
  const botoes = document.querySelectorAll("button");
  botoes.forEach(function(botao) {
    botao.addEventListener("click", verificarBotaoClicado);
  });
  


// var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// var inputIdsds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// function sortearNumero() {
//     return Math.floor(Math.random() * 2);
// }

// // const numeroSorteado = numeros.randon();
// console.log(sortearNumero());

// // function acertouNumero(){
// //     botao = document.getElementById();
// //     if (botao == sortearNumero()) {
// //         console.log("acertou") } else { console.log("errou")}
// // }
// function acertouNumero(botao) {
//     const numeroSorteado = sortearNumero();
//     // const botaoClicado = document.getElementById();
//     const botaoClicado = botao;

//     if (botaoClicado === "botao" + numeroSorteado) {
//       console.log("Parabéns! Você acertou o botão correto.");
//     } else {
//       console.log("Ops! Tente novamente.");
//     }


//   }

// // if (inputIds.includes(sorteado)) {
// //   console.log("The input ID exists in the array.");
// // } else {
// //   console.log("The input ID does not exist in the array.");
// // }

// // var resultado = ids.includes(numeroSorteado);
// // console.log(resultado);