const { somaTotal } = require('./exercicio-03');

describe('Exercicio 03 - Soma de todos os múltiplos de 5 e 7 abaixo de 1000', () => {
    it('Soma Total de todos os multiplos de 5 e 7', () => {
        expect(somaTotal()).toStrictEqual([ 156361 ]);
        expect(somaTotal(soma = 45)).toStrictEqual([ 156406 ]);
        expect(somaTotal(soma = 16587583)).toStrictEqual([ 16743944 ]);
    });
});