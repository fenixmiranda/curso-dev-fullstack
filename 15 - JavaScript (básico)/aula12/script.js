
let opcoes

for (let contador = 2022; contador >=1900; contador--) {
    opcoes = opcoes + `<option>${contador}</option>`

}
document.querySelector('#ano').innerHTML = opcoes


let lista =''
let clientes = ['Thiago', 'Rafael', 'Fenix', 'Fulano', 'Ciclano']

for (let contador = 0; contador <= clientes.length - 1; contador++) {
    lista = lista + `<li>${clientes[contador]}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista