let answerController = {
  async analizeAsk(watsonMessage, name) {
    let answer = watsonMessage
    switch (watsonMessage) {
      case 'if':
        answer = `Opa ${name} o if é uma estrutura de controle bem tranquila, vou te dar alguns exemplos.`
        return answer
      case 'while':
        answer = `Bom ${name} o while é tranquilo, ele funciona enquanto uma regra que você colocar for verdadeira ou falsa, dependendo somente da sua lógica`
        return answer
      case 'for':
        answer = `Ouvi uma vez que o for é um while enrustido kkk. E na verdade é mesmo, porque nele você mantém a sua lógica funcionando de acordo com a condição indicada no início`
        return answer
      case 'relacional':
        answer = `Bom, um operador relacional é um caracter utilizado pra fazermos comparações entre valores.`
        return answer
      case 'logico':
        answer = `Posso dizer que... bem, esse é um pouco mais difícil de explicar eu acho, mas é utilizado quando precisamos testar duas ou mais condições no nosso código.`
        return answer
      case 'aritmetico':
        answer = `Esse é o mais tranquilo de explicar. Com operadores aritméticos vc faz suas operações matemáticas, são bem simples e práticos.`
        return answer
      default:
        return answer
    }
  }
}

module.exports = answerController
