const { array, maxIndice, minIndice } = require('./exercicio-02');

describe('Exercicio 02 - Encontrar o maior e o menor indice dentro de um array', () => {
    it('Validar o menor indice', () => {
        expect(array[minIndice]).toBe(1);
    });

    it('Validar o maior indice', () => {
        expect(array[maxIndice]).toBe(10);
    });
});