let answerController = {
  async analizeAsk(watsonMessage, name) {
    if (watsonMessage === 'if') {
      watsonMessage = 'Opa ' + name + ' o if é uma estrutura de controle bem tranquila, vou te dar alguns exemplos.'
    }

    if (watsonMessage === 'while') {
      watsonMessage = 'Bom ' + name + ' o while é tranquilo, ele funciona enquanto uma regra que você colocar for verdadeira ou falsa, dependendo somente da sua lógica'
    }

    if (watsonMessage === 'for') {
      watsonMessage = 'Ouvi uma vez que o for é um while enrustido kkk. E na verdade é mesmo, porque nele você mantém a sua lógica funcionando de acordo com a condição indicada no início'
    }

    if (watsonMessage === 'relacional') {
      watsonMessage = 'Bom, um operador relacional é um caracter utilizado pra fazermos comparações entre valores.'
    }

    if (watsonMessage === 'logico') {
      watsonMessage = 'Posso dizer que... bem, esse é um pouco mais difícil de explicar eu acho, mas é utilizado quando precisamos testar duas ou mais condições no nosso código.'
    }

    if (watsonMessage === 'artimetico') {
      watsonMessage = 'Esse é o mais tranquilo de explicar. Com operadores aritméticos vc faz suas operações matemáticas, são bem simples e práticos.'
    }

    return watsonMessage
  }
}

module.exports = answerController
