// Contexto Lexico

const valor = 'Global'

function minhaFuncao(){
  console.log(valor)
}

minhaFuncao()

function exec(){
  const valor = 'Local'
  minhaFuncao
}

exec()


// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variaveis externas a função

//Contexto Lexico em ação !

const x = 'Global'

function fora(){
  const x = 'Local'
  function dentro(){
    return x
  }
  return dentro
}

const minhaFuncao2 = fora()
console.log(minhaFuncao2())
