//Filter
const produtos = [
  { nome: 'Nootbook', preco:5222, fragil: true},
  { nome: 'ipad Pro', preco:12000, fragil: true},
  { nome: 'Copo de Vidro', preco:12.40, fragil: true},
  { nome: 'Copo de Plástico', preco:5.60, fragil: false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

//Reduce

const alunos = [
  {nome: 'João', nota: 7.3, bolsista: false},
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Pedro', nota: 9.8, bolsista: false},
  {nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultado = alunos.map( a => a.nota).reduce(function(acumulador, atual){
  console.log(acumulador, atual)
  return acumulador + atual
})
console.log(resultado)
