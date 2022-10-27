/* Exercicio 03, trazer no console log a média da Maria de acordo com as notas que ela teve nos 6 bimestres (utilizar reduce)*/

const aluno = [
    {
        nome: 'Maria',
        sobrenome: 'da Silva',
        notas: [7, 10, 8, 5, 7, 9],
    }
]

// concatenando o nome e sobrenome
const nomeConcatenado = aluno.map(aluno => aluno.nome +' '+ aluno.sobrenome)

// vinculando o array em uma variavel
const arrayNotas = aluno.reduce((acc, curr) => {
    let contarNotas = curr.notas
    return contarNotas

},'')


//somando os dados do array
let numeros = arrayNotas

let total = numeros.reduce(function(valorAcumulado, numeroAtual){
    return valorAcumulado + numeroAtual;
}, 0);
// calculando a média final pelo tamanho de informações do array
mediaFinal = total / arrayNotas.length

//exibindo a informação da média final do aluno para o usuario no console log
console.log(`A média da ${nomeConcatenado} foi ${mediaFinal.toFixed(2)} para o total de ${arrayNotas.length} bimestres`)
