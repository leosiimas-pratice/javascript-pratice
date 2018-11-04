//foreach

const aprovados2 = ['Aghata','Aldo','Daniel','Raquel']

aprovados2.forEach(function(nome, indice,x){
  console.log(`${indice + 1}) ${nome}`)
  console.log(x)
})

aprovados2.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados2.forEach(exibirAprovados)

console.log('---------------------------')
console.log('---------------------------')
console.log('---------------------------')
console.log('---------------------------')

const aprovados = ['Aghata','Aldo','Daniel','Raquel']

aprovados.forEach2(function(nome, indice,x){
  console.log(`${indice + 1}) ${nome}`)
  console.log(x)
})
