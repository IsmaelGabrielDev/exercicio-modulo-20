//3. listando todos os números inteiros abaixo de 10 são múltiplos de 3 ou 5, ficamos com 3, 5, 6, 9.
//A soma desses múltiplos é 23. Crie uma função que retorne a soma de todos os múltiplos de 5 e 7 abaixo de 1000.

const somaTotal = function(soma = 0) {
    for (let i = 1; i < 1000; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i
        }
    }
    return [soma] //retorna a soma
}

console.log(somaTotal())

module.exports = { somaTotal };
