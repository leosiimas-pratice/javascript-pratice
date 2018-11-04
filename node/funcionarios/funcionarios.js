const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

let maiorSalario = 0

axios.get(url).then(response=>{
  const funcionarios =  response.data

  const chineses = funcionario => (
    funcionario.pais == "China"
  )

  const mulher = funcionario => (
    funcionario.genero == "M"
  )

  const menorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
  }

  const func = funcionarios
  .filter(chineses)
  .filter(mulher)
  .reduce(menorSalario)

  console.log(func)
})
