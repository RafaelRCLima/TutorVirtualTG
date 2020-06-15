const Log = require('../models/Log')

let answerService = {
  async answerAboutIf(name) {
    let answers = [
      `Opa ${name} o if é uma estrutura de controle bem tranquila, vou te dar um exemplo.`,
      `Imagine o seguinte:
Você precisa dividir um valor por 2, mas somente se for maior que 3
Pra que essa condição seja satisfeita, usando um exemplo em python seria assim:
  if (valor > 3):
    print(valor/2)`,
      'Viu como é fácil?'
    ]

    return answers
  },

  async answerAboutWhile(name) {
    const answers = [
      `Bom ${name} o while é tranquilo, ele funciona enquanto uma regra que você colocar for verdadeira ou falsa, dependendo somente da sua lógica`,
      'Vou te dar um exemplo',
      'Imagine que vc precisa que uma pergunta seja feita até que o usuário digite o valor correto',
      'Melhor ainda, pensa que vc quer que o usuário digite 2',
      'Se vc simplesmente fizer o seu código sem colocar uma condição, certeza que vai estourar um erro',
      'Com o while vc pode fazer assim:',
      'while (valor =! 2):\n valor = int(input("Digite 2: "))',
      'Nesse exemplo, enquanto o valor digitado for diferente de 2, esse pedaço de codigo vai ser executado',
      'Ficou tranquilo pra entender?'
    ]
    return answers
  },

  async answerAboutFor(name) {
    const answers = [
      `Ouvi uma vez que o for é um while enrustido kkk. E na verdade é mesmo, porque nele você mantém a sua lógica funcionando de acordo com a condição indicada no início`,
      'A estrutura do for é diferente em algumas linguagens. Uma das mais tranquilas de entender é a do python',
      'Suponha primeiro que vc tem uma lista que contém 3 filmes',
      `Dessa forma:
filmes = [ Vingadores, Gravidade, Sonic ]`,
      'Pra imprimir todos esses valores usando o for fazemos assim:',
      'for filme in filmes:\n  print(filme)',
      'Bem tranquilinho ne?'
    ]
    return answers
  },

  async answerAboutRelational(name) {
    const answers = [
      'Aah sim, beleza, vamo lá',
      'Operadores relacionais são caracteres que utilizamos para fazer comparações',
      `São eles \n\n==(igual)\n!=(diferente)\n<(menor que)\n>(maior que)\n<=(menor ou igual que)\n>=(maior ou igual que)`,
      `É bom lembrar que o operador '=' é utilizado para atribuição, quando necessária a comparação aí precisa ser '=='.`,
      'Nessa até consegui falar menos kkk... mas entendeu né?'
    ]
    return answers
  },

  async answerAboutLogical(name) {
    const answers = [
      'Posso dizer que... bem, esse é um pouco mais difícil de explicar eu acho, mas é utilizado quando precisamos testar duas ou mais condições no nosso código.',
      'Se vc já mexeu com Excel alguma vez, talvez já tenha visto isso',
      "Os tipos de operadores lógicos mais usados são 'and' e 'or'",
      "Mas existem também 'nand', 'nor' e 'xor'",
      'Normalmente usamos quando precisamos de uma validação que precise passar por mais de uma condição, por exemplo:',
      'if (valor == 2 or valor == 3):\n  print(valor)',
      'Essa parte é um pouco complicadinha, mas dá uma olhada nesse link aqui que tem uma explicação legal',
      'http://excript.com/python/operadores-logicos-python.html',
      'Nossa... falei bastante nessa kkk.... Espero ter ajudado =)'
    ]
    return answers
  },

  async answerAboutArithmetics(name) {
    const answers = [
      'Esse é o mais tranquilo de explicar. Com operadores aritméticos vc faz suas operações matemáticas, são bem simples e práticos.',
      "Usamos o '/' para divisão, '*' para multiplicação,  '-' para subtração e '+' para soma",
      'Com o operador de soma dá até pra fazer concatenação de strings',
      'Conseguiu pegar a ideia?'
    ]
    return answers
  },

  async sendAnEmailToTeacher(name) {
    const answers = [
      'Pode deixar, vou entrar em contato com um professor pra te ajudar agora mesmo'
    ]
    return answers
  },

  async sendVideo(name, idTelegram) {
    const studentLogs = await Log.findAll({
      where: {
        idTelegram: idTelegram
      }
    })

    const lastLog = await studentLogs[studentLogs.length - 1]

    let answers = [`Perdão, no momento não tenho vídeos disponíveis para enviar sobre ${lastLog.subject}`]

    switch (lastLog.subject) {
      case 'if':
        answers = ['Esse vídeo do canal Curso em vídeo tem uma explicação interessante',
          'https://www.youtube.com/watch?v=K10u3XIf1-Q']
        return answers
      case 'while':
        answers = ['Acho que esse vai te ajudar',
          'https://www.youtube.com/watch?v=LH6OIn2lBaI']
        return answers
      case 'for':
        answers = ['Vê se esse te ajuda',
          'https://www.youtube.com/watch?v=cL4YDtFnCt4']
        return answers
      case 'relacional':
        answers = ['Dá uma olhada nesse',
          'https://www.youtube.com/watch?v=mM5anx39D24']
        return answers
      case 'logico':
        answers = ['Ve o que acha desse',
          'https://www.youtube.com/watch?v=czW7I2CCcUM']
        return answers
      case 'aritmetico':
        answers = ['Gosto bastante do conteúdo desse canal, dá uma olhada nesse video',
          'https://www.youtube.com/watch?v=Vw6gLypRKmY']
        return answers
      default:
        break;
    }

    return answers
  }
}

module.exports = answerService
