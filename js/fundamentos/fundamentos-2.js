//* Array
const valores = [7.7, 8.9, 4.7]
console.log(valores[0], valores[2])
/*
    'x.length' retorna tamanho do array x
    'x.push' adiciona um novo elemento no final do array x
    'x.pop' retira o ultimo elemento do array x
    'delete x[y]' retira o  elemento da posição y do array x
*/

//* Objetos
const prod = {}
prod.nome = 'Celular Ultra Mega'
prod.preco = 4999.90
console.log(prod)

// cria nome e preco de forma dinamica

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90
}
console.log(prod2)

// cria nome e preco de forma literal

//* Null e Undefined
/*  Tipos primitivos quando feito a atribuição de valores cada um armazena seu valor. Mudar a não muda b
    Tipos Objetos quando feito atribuição é atribuido a posição de memoria. Mudar a, muda b

    Undefined: Variavél não recebeu nenhuma atribuição, não foi iniciado
    Error: ('is not Defined"): Variavel não foi declarado
    Null: Ausencia de Valor, 'Vazia', foi inicializada, mas não tem nenhum valor
*/
