//Função Factory : Fabricar um objeto

//Simples:
function criarPessoa(){
  return{
    nome: 'Ana',
    sobrenome:'Silva'
  }
}
console.log(criarPessoa())


function criarProduto( nome, preco){

  return{
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(criarProduto('Notebook', 5555.26))
console.log(criarProduto('iPad', 15555.26))
console.log(criarProduto('Notebook', 5555.26))
