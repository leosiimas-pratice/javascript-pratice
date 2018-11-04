//For

for (let i = 1; i<=10;i++){
  console.log(`i = ${i}`)
}

const notas = [6,7,9,8,7]

for(i=0; i<notas.length; i++){
  console.log(`nota = ${notas[i]}`)
}

//For In

const notas2=[6.7, 7.4, 9.8, 8.1,7.7]

for ( i in notas){
  console.log(i, notas2[i])
}

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29,
  peso: 64
}

for (atributo in pessoa){
  console.log(`${atributo} = ${pessoa[atributo]}`)
}
