


function chamarPrompt() {
    let nome = prompt('Digite seu nome:')
    let idade = prompt('Digite sua idade:')

    if(nome === '' || idade ==='') {
        alert('Favor digitar corretamente!')
        return
    }

    let maiorIdade = 18

    if ( idade >= maiorIdade ) {
       
            document.querySelector("#texto").innerHTML=`Olá ${nome}, você é maior de idade.`
    } 
    else {

            document.querySelector("#texto").innerHTML=`Olá ${nome}, você é menor de idade.`
        
    }

    if (nome.toLowerCase()==='thomas anderson') {
        document.querySelector("#texto2").innerHTML=`Você é personagem do filme The Matrix!`
    }


}



