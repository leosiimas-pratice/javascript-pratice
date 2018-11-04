// Herança : Object.create

const pai = {nome: 'Pedro', corCabelo:'preto'}
const filha1=Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)
console.log(filha1.nome)

const filha2 = Object.create(pai, {
  nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome}`)

for (let key in filha2){
  filha2.hasOwnProperty(key) ?
    console.log(key) : console.log (`Pro herança ${key}`)
}

//Herança : Function

function MeuObjeto(){}

const obj1 =  new MeuObjeto
const obj2 =  new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
  console.log(`BLA BLA BLA ${this.nome}`)
}

obj1.falar()
