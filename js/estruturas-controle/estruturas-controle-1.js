// IF
function soBoaNoticia(nota){
  if(nota >= 7){
    console.log('Aprovado com ' + nota)
  }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
  if(valor){
    console.log('é verdade ' + valor)
  }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-4)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})

function test1(num){
  if(num > 7)
    console.log(num)

  console.log('Final')
}

test1(6)
test1(8)

function teste2(num){
  if(num > 7);{
    console.log(num)
  }
}


teste2(6)
teste2(8)
