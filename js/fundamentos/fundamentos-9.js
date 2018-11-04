//Operadores Logicos

const t1 = true
const t2 = false

if ( t1 === true && t2 === true){
  console.log('Comprar TV 50 polegadas')
}else if (t1 != t2) {
  console.log('Comprar uma tv 32 polegadas')
}else{
  console.log('Não irá comprar uma TV')
}


//Operadores Unarios

let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

//Operadores Ternario

const resultado = nota =>  nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(5.1))
