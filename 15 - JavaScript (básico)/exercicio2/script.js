let nome = prompt('Digite seu nome:')
let idade = prompt('Digite sua idade:')

let maiorIdade = 18

    if (idade >= maiorIdade) {
        if (nome.toLowerCase()==='thomas anderson') {
            document.write(`Olá ${nome}, você é maior de idade! Você é personagem do filme The Matrix!`)
        }
        else {
            document.write(`Olá ${nome}, você é maior de idade.`)
        }
    } 
    else {
        if (nome.toLowerCase()==='thomas anderson') {
            document.write(`Olá ${nome}, você é menor de idade. Você é personagem do filme The Matrix!`)
        }
        else {
            document.write(`Olá ${nome}, você é menor de idade.`)
        }
    }