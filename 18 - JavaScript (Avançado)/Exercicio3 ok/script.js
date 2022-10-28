
/* Exercicio 03, trazer no console log a média do aluno de acordo com as notas que ela teve nos 6 bimestres (utilizar reduce)*/

const alunos = [
    {
        nome: 'Maria',
        sobrenome: 'da Silva',
        notas: [7, 10, 8, 5, 7, 9],
    },
    {
        nome: 'Marcelo',
        sobrenome: 'Arraes',
        notas: [6, 9, 9, 7, 7, 10],
    },
]

for(let x in alunos){
    let item = alunos[x]
     let soma = item.notas.reduce(function(soma, i) {
      return soma + i
    })
    let texto = `A média do aluno ${item.nome} ${item.sobrenome} foi ${(soma/item.notas.length).toFixed(1)} para o total de ${item.notas.length} bimestres`

     console.log(texto)
  }