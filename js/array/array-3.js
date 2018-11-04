//Map

const nums = [1,2,3,4,5]

let resultado = nums.map(function(e){
  return e * 2
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDInheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
resultado = nums.map(soma10).map(triplo).map(paraDInheiro)

console.log(resultado)


const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.95}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
]

//Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)
