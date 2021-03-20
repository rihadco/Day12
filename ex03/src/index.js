function rangeOfNumbers(startN, endN) {
    if (endN - startN === 0) {
        return [startN];
    }
    else if (endN < startN) {
        return "The starting number will always be less than or equal to the ending number";
    }
    else {
        var numbers = rangeOfNumbers(startN, endN - 1);
        numbers.push(endN);
        return numbers;
    }
}
console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;