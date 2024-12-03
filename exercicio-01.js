//1. Calcule o MDC (Máximo Divisor Comum) de dois números inteiros.

const mdc = function(a, b) {
    if (b === 0) {
        return a;
    } else {
        return mdc(b, a % b);
    }
}

console.log(mdc(12, 18));

module.exports = { mdc };

