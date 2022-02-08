function clonaObjetoThiz(newname){    
        return {
            ...this,
            nome: newname
        }     
}
const pp1 = {
    nome: 'feio',
    meses: 3,
    clonaObjetoThiz
}
let patinhos = [
    pp1,
    { ...pp1.clonaObjetoThiz('bonito') },
    { ...pp1.clonaObjetoThiz('arrumado') },
    { ...pp1.clonaObjetoThiz('arrumado') }
]
let oldArr = []
const reduzASomaDeNomes = function (acumulator, actualVal,
    actualIndx, arrayUpdated) {
    let tudo = {...arguments}
    let namesSum = ''
    let isEndOfIteration = actualIndx+1===arrayUpdated.length
    if(isEndOfIteration){

    }
    if (actualVal) {
        actualVal.nome += `-${actualIndx}`

        if (actualIndx === 1) {
            namesSum = acumulator.nome + actualVal.nome
        } else {
            namesSum = acumulator + actualVal.nome
        }

        return namesSum
    }

}
let todosNomes = patinhos.reduce(reduzASomaDeNomes)

const d=0
let icy = 0