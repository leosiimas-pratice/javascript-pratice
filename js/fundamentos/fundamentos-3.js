//* Funções

// Função sem retorno
function imprimirSoma(a, b){
  console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma()

// Funçã com retorno
function soma(a,b=0){
  return a + b
}
console.log(soma(2))

// Armazenando uma Funçã numa Variavel
const imprimirSoma2 = function (a, b){
  console.log(a+b)
}
imprimirSoma2(7,7)

// Utilizando FUnção Arrow
const soma2 = (a, b) => {
  return a + b
}
console.log(soma(2,3))

// Retorno implícito
const subtracao = (a,b) => a - b
console.log(subtracao(3,2))
