const customVehicle =  { nome:'honda' }
const person = {
    nome: 'funcionario',
    meses: 3,
    salario:5, 
    createVehicle:salaryCreateVehicle
}

function shouldBeCar(salario){
    return salario > 16
} 
function salaryCreateVehicle(){     
        this.salario+= 5
        let clone = {...this,     }

        let newvehicle = { ...customVehicle}
        if(shouldBeCar(this.salario)){
            newvehicle.nome= 'ford'
            clone['carro'] = newvehicle
        }else{         
            clone['moto'] = newvehicle
        }
        return clone
}

let patinhos = [
    { ...person.createVehicle() },
    { ...person.createVehicle() },
    { ...person.createVehicle() },
    { ...person.createVehicle() } ] 
const removeVehicleBrand = function(myPerson){
    let vehicleName = 'moto'
    if(shouldBeCar(myPerson.salario)){
        vehicleName = 'carro'
    }

    let {[vehicleName]:personalTransport } = myPerson
    personalTransport.nome = ''
}
const becomeRich = function (acumulator, myPerson,
    actualIndx, arrayUpdated) {
    let allArgTest = {...arguments}

    let myMoney = acumulator+myPerson.salario
    removeVehicleBrand(myPerson)

    myPerson.salario=0
    return myMoney

}
let myNewFortune = 0 
myNewFortune = patinhos.reduce(becomeRich,myNewFortune)

const d = 0
let icy = 0