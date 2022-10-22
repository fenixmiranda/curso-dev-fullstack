/*

JSON

JAVASCRIPT OBJECT NOTATION

Antes do Json era através de XML


*/

const objeto = {
    nome: 'fulano', idade:23,
}

//transformar objeto em Json
const json = JSON.stringify(objeto)

//transformar json em Objeto
const jsonParseado = JSON.parse(json)

console.log(jsonParseado.idade)