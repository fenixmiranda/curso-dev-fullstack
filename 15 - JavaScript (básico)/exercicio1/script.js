let nome = prompt('Digite seu nome:')
let idade = prompt('Digite sua idade:')

let maiorIdade = 18

if (idade >= maiorIdade ) {
    document.write(`Olá ${nome}, você é maior de idade`)
} else {
    document.write(`Olá ${nome}, você é menor de idade.`)
}