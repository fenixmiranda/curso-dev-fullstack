const clientes = [
    { name: 'Fulano', lastname: 'Da Silva', age: 14 },
    { name: 'Ciclano', lastname: 'Santos', age: 18 },
    { name: 'Beltrano', lastname: 'Moreira', age: 20 },
]

// 1 maneira de fazer
// const clientesMaiores = clientes.filter(cliente => {
//     let retorno = false

//     if(cliente.age >= 18) {
//         retorno = true
//     }

//     return retorno
// })

// console.log(clientesMaiores)


//DE 1 linha só

const clientesMaiores = clientes.filter(cliente => cliente.age >= 18)

console.log(clientesMaiores)