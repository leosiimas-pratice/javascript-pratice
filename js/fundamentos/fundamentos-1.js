//* Variaveis
var a = 3
let b = 4 // forma mais moderna de criar let > var
const c = 5 // declarado apenas uma vez. Quanto mais, melhor

//* Mudança de Tipo de Variavel
const binario = 6.10
console.log(binario.toString(2)) // '.toString (2)' retorna o valor em binario
console.log(binario.toFixed(2)) // '.toFixed(x)' retorna o numero com x n decimais

//* Math
const raio = 9
const area = Math.PI * Math.pow(raio, 2)
console.log(area)

//* String
/*
    '.charAt(x)' retorna o caracter da posição x
    '.charCodeAt(x)' retorna o valor ASCII do caracter na posição x
    '.indexOf('x')' retorna a posição do caracter x da string
    '.substring(x)' retorna string a partir da posição x
    '.substring(x, y)' retorna string a partir da posição x até a y (sen incluir y)
    '.concat(x)' concatena x
    '.replace(x, y)' substitui x por y
    '.split(',')' transforma a string em um array, definindo a , como ponto de separação
*/

//* Template String ( utiliza-se crase ` exemplo` para ter mais controle da string)
    const nome = "Leo"

    const template = `
    Olá
    ${nome}!`

    console.log(template)
