//* Usando Var

{{{{var sera = 'Sera????'}}}}
console.log(sera)

function teste(){
  var local = 123
}
//console.log(local) //Error
var numero = 1
{
  var numero= 2
  console.log('dentro = ', numero)
}
console.log('fora = ', numero)


//* Usando Let

var numero2 = 1
{
  let numero2 = 2
  console.log('dentro = ', numero2)
}
console.log('fora = ', numero2)
