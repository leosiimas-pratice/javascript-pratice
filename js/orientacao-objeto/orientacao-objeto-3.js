//Object Constante:

const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa.nome)

Object.freeze(pessoa) // Congela o objeto pessoa, nao pode mais mexer
pessoa.nome = 'Maria'
console.log(pessoa.nome) // não é pessivel ser alterado

//Notação Literal:
const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = { a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 ={[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
  funcao1: function(){
    //....
  },
  funcao2(){
    //....
  }
}

console.log(obj5)
