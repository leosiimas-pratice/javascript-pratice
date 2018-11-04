// Função autoinvocada IIFE

(function(){
  console.log('Sera executado na hora!')
  console.log('Foge do escopo mais abrangente')
})()

//Call e Apply
function getPreco(imposto = 0, moeda = 'R$'){
  return `${moeda} ${this.preco * ( 1-this.desc) * ( 1 + imposto)}`
}

const produto = {
  nome : 'Blabla',
  preco: 4589,
  desc: 0.15,
  getPreco
}

global.preco = 20
global.desc = 0.1
console.log(produto.getPreco())

const carro = {preco: 485555, desc: 0.2}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global,[0.17, '$']))
