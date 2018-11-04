// Getters Setter
//get - le, set - alterar

const sequencia = {
  _valor: 1, // convenção, pre entendida que é privada
  get valor(){ return this._valor++},
  set valor(valor){
    if(valor>this._valor){
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor)

//Funções Importantes de objeto
const pessoa ={
  nome: 'Rebeca',
  idade: 2,
  peso:13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor])=>{
  console.log(pessoa)
})
Object.entries(pessoa).forEach(([chave, valor])=>{
  console.log(`${chave}:${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
  enumerable: true,
  writable: false,
  value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//object.assign(ECMA 2015)

const dest = { a: 1}
const o1 = { b: 2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest,o1,o2)
console.log(obj)
