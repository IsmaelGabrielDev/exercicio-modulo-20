//2. Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const maxIndice = array.indexOf(Math.max(...array))
const minIndice = array.indexOf(Math.min(...array))

console.log(`Maior valor: ${array[maxIndice]}`)
console.log(`Menor valor: ${array[minIndice]}`)

