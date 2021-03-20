function sumFibonacci(num) {
    if (num <= 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    if (num == 2) {
        return 2;
    }
    var fibonacci = [1, 1];
    var sumOddFib = 2;
    for (var i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        if (fibonacci[i] % 2 != 0 && fibonacci[i] <= num) {
            sumOddFib += fibonacci[i];
        }
    }
    return sumOddFib;
}
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;