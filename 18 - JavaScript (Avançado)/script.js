/* Exercicio 01, concatenar nome e sobrenome atráves do método MAP */


const alunos = [
    {
        nome: 'Maria',
        sobrenome: 'da Silva',
    },
    {
        nome: 'José',
        sobrenome: 'Moreira',
    },

    {
        nome:'Paulo',
        sobrenome:'Henrique',
    },

    {
        nome:'Pedro',
        sobrenome:'Souza',
    },
]


const alunoFinalMap = alunos.map(aluno => aluno.nome +' '+ aluno.sobrenome)
console.log(alunoFinalMap)