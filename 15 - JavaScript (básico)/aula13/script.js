

let clientes = [
    {
        nome: 'Thiago',
        idade: 35,
        linguagens: ['javascript', 'python', 'php']

    },
    {
        nome: 'Fenix',
        idade: 29,
        linguagens: ['c#', 'c++', 'java']

    },
    {
        nome: 'Rafael',
        idade: 26,
        linguagens: ['php', 'react', 'go']

    }
]

/* for (let contador = 0; contador < clientes.length; contador++) {
    console.log(clientes[contador].nome)
}
*/

let htmlClientes=''

for (let cliente of clientes) {

    let listaLinguagens = ''
        for (let linguagem of cliente.linguagens) {
            listaLinguagens += `<li>${linguagem}</li>`
        }
    htmlClientes += `
    <li>
        <b>Nome:</b>${cliente.nome}<br>
        <b>Idade:</b>${cliente.idade}<br>
        <b>Linguagens:<b><br>
        <ul>
            ${listaLinguagens}
        </ul>
    </li>        
    `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes
