//While
function getInteiroAleatorioEntre(min, max){
  const valor = Math.random() * ( max- min ) + min
  return Math.floor(valor)
}

let opcao = 0
let i = 1

while(opcao != -1){
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log( `A opção escolhida foi ${opcao} na tentativa ${i}`)
  i++
}

//Do While

function getInteiroAleatorioEntre2(min, max){
  const valor = Math.random() * ( max- min ) + min
  return Math.floor(valor)
}

let opcao2 = 0
let j = 1
do{
  opcao2 = getInteiroAleatorioEntre2(-1, 10)
  console.log( `A opção escolhida foi ${opcao2} na tentativa ${j}`)
  j++
}while(opcao2 != -1)
