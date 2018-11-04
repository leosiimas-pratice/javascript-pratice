// this e bind
const pessoa = {
  saudacao: 'Bom Dia',
  falar(){
    console.log(this.saudacao)
  }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e o OO


const falarDePessoa = pessoa.falar.bind(pessoa) // bind serve para amarra o this
falarDePessoa()

function Pessoa(){
  this.idade = 0
  const self = this
  setInterval(function(){
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/, 1000)
}

new Pessoa
