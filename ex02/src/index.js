function myCounter(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = myCounter(n - 1);
        arr.unshift(n);
        return arr;
    }
}
console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;