//IF e Else

const imprimirResultado1 = function(nota){
  if(nota >= 7){
    console.log('Aprovado')
  }else{
    console.log('Reprovado')
  }
}

imprimirResultado1(10)
imprimirResultado1(1)
imprimirResultado1('Epa!')
imprimirResultado1('10')
imprimirResultado1('5')


Number.prototype.entre = function (inicio, fim){
  return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
  if(nota.entre(9,10)){
    console.log('Quadro de Honra')
  }else if( nota.entre(7, 8.99)){
    console.log('Aprovado')
  }else if (nota.entre(4, 6.99)){
    console.log('Recuperação')
  }else if(nota.entre(0, 3.99)){
    console.log('Reprovado')
  }else{
    console.log('Nota Invalida')
  }

  console.log('fim')
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(11)
