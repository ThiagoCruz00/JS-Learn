//Operador Ternário

// function validaIdade(idade) {
//   return idade >= 18
//     ? console.log("Pode comprar!")
//     : console.log("Não pode comprar!");

// }

// validaIdade(16)
// validaIdade(18)
// validaIdade(20)
// validaIdade(10)

// const age = 16
// const message = age >= 18
// ?
// "Voçê é maior de idade!"
// :
// "Voçê é menor de idade!"

// console.log(message)

// Exercício 1 - Verificação de
//Escreva um código que verifique se um número é par ou ímpar usando o operador térmico

function ParOuImpar(verificação) {
  return verificação % 2 === 0
    ? console.log("Esse número é par!")
    : console.log("Esse número é ímpar!");
}

// ParOuImpar(70);
// ParOuImpar(73);
// ParOuImpar(3);

function validaFidelidade(clienteFidelidade) {
  return clienteFidelidade === true
    ? console.log("Desconto de 10%")
    : console.log("Cliente novo apenas 5%");
}

// validaFidelidade(true);
// validaFidelidade(false);

function validaIdadeIF(idade) {
  if (idade >= 18) return console.log("É maior de idade!");
  else {
    return console.log("É menor de idade!");
  }
}

// validaIdadeIF(19)

function validaNota(nota) {
  if (nota >= 7) {
    return console.log("Esta aprovado!");
  } else if (nota >= 5 && nota <= 6) {
    return console.log("Está de recuperação!");
  } else {
    return console.log("Reprovado!");
  }
}

// validaNota(4)
// validaNota(7)
// validaNota(5)

function validaNumero(numero) {
  if (numero > 0) {
    return console.log("Positivo!");
  } else if (numero == 0) {
    return console.log("Zero!");
  } else {
    return console.log("Negativo!");
  }
}

// validaNumero(80)
// validaNumero(0)
// validaNumero(-2)

function diaDaSemana(dia) {
  switch (dia) {
    case 1:
      return console.log("Domingo");
    case 2:
      return console.log("Segunda-Feira");
    case 3:
      return console.log("Terça-Feira");
    case 4:
      return console.log("Quarta-Feira");
    case 5:
      return console.log("Quinta-Feira");
    case 6:
      return console.log("Sexta-Feira");
    case 7:
      return console.log("Sábado");
    default:
      return console.log("Dia inválido");
  }
}

// console.log (diaDaSemana(5))
// console.log (diaDaSemana(20))


function classificacao(nivel){
    switch(nivel){
        case "iniciante": return console.log("Você é fraco!")
        case "intermediario": return console.log("Você é fortinho!")
        case "avançado": return console.log("Você é o CARA!")

        default: return console.log("Você é nilba!")
    }
}

classificacao("iniciante")
classificacao("intermediario")
classificacao("avançado")
classificacao("sla")


function handleMonth(mes){
    switch(mes){
        case 1: return console.log("Janeiro")
        case 2: return console.log("Fevereiro")
        case 3: return console.log("Março")
        case 4: return console.log("Abril")
        case 5: return console.log("Maio")
        case 6: return console.log("Junho")
        case 7: return console.log("Julho")
        case 8: return console.log("Agosto")
        case 9: return console.log("Setembro")
        case 10: return console.log("Outubro")
        case 11: return console.log("Novembro")
        case 12: return console.log("Dezembro")
        default: return console.log("Mês inválido")
    }
}

// handleMonth(23)
// handleMonth(2)