// Herança:

const ferrari={
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'v40',
  velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

//Cadeia de protótipos (prototype chain)

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 'D'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0,filho.attr1, filho.attr3)

const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMais(delta){
    if(this.velAtual + delta <= this.velMax){
      this.velAtual += delta
    }else{
      this.velAtual = this.velMax
    }
  },
  status(){
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari2 = {
  modelo: 'F40',
  velMax: 324
}

const volvo2 = {
  modelo: 'v40',
  velMax: 200,
  status(){
    return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari2)
console.log(volvo2)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())
