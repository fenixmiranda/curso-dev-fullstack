/* Exercicio 02, trazer no console log apenas quem teve nota maior ou igual a 7*/

const media = 7

const alunos = [
    {
        nome: 'Maria',
        sobrenome: 'da Silva',
        nota: 10,
    },
    {
        nome: 'José',
        sobrenome: 'Moreira',
        nota: 4,
    },

    {
        nome:'Paulo',
        sobrenome:'Henrique',
        nota: 7,
    },

    {
        nome:'Pedro',
        sobrenome:'Souza',
        nota: 5,
    },
]


const alunosAprovados = alunos.filter(aluno => aluno.nota >=7)
console.log(alunosAprovados)