const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro ={
  modelo: 'A4',
  valor:89000,
  propietario{
    nome: 'Raul',
    idade: 56,
    endereco{
      lagradouro: 'Rua ABc',
      numero: 123
    }
  }
}
