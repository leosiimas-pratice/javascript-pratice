// Callback
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
  console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

//Callback 2

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem Callback

let notasBaixas = []
for (let i in notas){
  if (notas[i] < 7){
    notasBaixas.push(notas[i])
  }
}

console.log(notasBaixas)

//Com Callback
notasBaixas = notas.filter(function(nota){
  return nota > 7
})

console.log(notasBaixas)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
