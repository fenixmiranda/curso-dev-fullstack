const clientes = [
    { name: 'Thiago', score: 34 },
    { name: 'Jaqueline', score: 38 },
    { name: 'Sarah', score: 80 },
    { name: 'Clara', score: 50 },
    { name: 'Sophia', score: 98 },
]

//acc = accumulator
//curr = current

const clientesFinal = clientes.reduce((acc, curr) => {
     if (curr.score >= 50) {
         acc.pass.push(curr)
     } else {
         acc.fail.push(curr)
     }

     return acc
 }, {
     pass: [],
     fail: [],
 })

 console.log(clientesFinal)



// const numero = [1, 2, 3, 4]

// //'2 - 3 - 4 - 5'

// const numerosFinal = numero.reduce((acc, curr) => {
    
    
//     acc += `${curr + 1} -`
    
//     return acc

    
// }, '')

// console.log(numerosFinal)