


    let numTab = prompt('Digite qual tabuada você quer saber:')
    let multiplicador = 0
    /*while( multiplicador < 10 ) {
        let resultado = numTab * multiplicador
        document.querySelector('#tabuada').append(`<li>${numTab} * ${multiplicador} = ${resultado} </li>`)
        multiplicador++
    }
    */


    while( multiplicador < 10 ) {
        let resultado = numTab * multiplicador
        let li = document.createElement('li')
        li.innerHTML = `${numTab} * ${multiplicador} = ${resultado}`
        document.querySelector('#tabuada').append(li)
        multiplicador++
    }


