/*

SINCRONO vs ASSINCRONO



*/

function primeira() {
    console.log('primeira')

    for (let index = 0; index < 10000000000; index++) {

}
}

function segunda() {
    console.log('segunda')
}


primeira()
// setTimeout (primeira, 2000) //assincrono

segunda()