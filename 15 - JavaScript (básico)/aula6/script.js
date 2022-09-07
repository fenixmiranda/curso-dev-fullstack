/*

string
number
boolean
array
object
undefined
null

*/

//string 
let nome='Fenix'
console.log (nome)

//string - concatenada
let sobrenome = 'Miranda'
// console.log(nome +' '+ sobrenome)
//string literal (Jeito correto de concatenar)
console.log(`${nome} ${sobrenome}`)

//number
let idade = 29 //para usar números não utilizar a aspas simples

console.log(idade)
console.log(idade + 10)

// number - float
let porcentagem = 10.2
console.log(porcentagem+'%')

//boolean (true ou false)

let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)


//array

let habilidades = ['Javascript', 'PHP', 'Python']
console.log(habilidades)
console.log(habilidades.length)
console.log(habilidades[2])

//Object

let pessoa = {
    nome: 'Fulano',
    sobrenome: 'Da Silva',
    idade: 25,
    habilidades: ['c++', 'c#', 'Python']
}

// JSON (JAVASCRIPT OBJECT NOTATION)

console.log(pessoa.sobrenome)
console.log(pessoa.habilidades[1])

// undefined

let endereco
console.log(endereco)

//null

let cidade = null
console.log(null)