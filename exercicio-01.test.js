const { mdc } = require('./exercicio-01');

describe('Exercicio 01 - Validando MDC(Máximo Divisor Comum)', () => {
    it('Validar a soma de dois MDC', () => {
        expect(mdc(12, 18)).toBe(6);
        expect(mdc(43, 60)).toBe(1);
        expect(mdc(25, 50)).toBe(25);
    });
});