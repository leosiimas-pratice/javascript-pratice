const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop()
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
