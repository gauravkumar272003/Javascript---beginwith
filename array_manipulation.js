let numbers = [5, 3, 8, 1, 21];

function addNumber(array, number) {
    array.push(number);
}

function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

function calculateSum(array) {
    return array.reduce((sum, number) => sum + number, 0);
}

function calculateAverage(array) {
    const sum = calculateSum(array);
    return array.length > 0 ? sum / array.length : 0;
}

console.log("Initial array:", numbers);

addNumber(numbers, 4);
console.log("After adding 4:", numbers);

removeNumber(numbers, 3);
console.log("After removing 3:", numbers);

const sortedNumbers = sortNumbers(numbers);
console.log("Sorted array:", sortedNumbers);

const sum = calculateSum(numbers);
console.log("Sum of numbers:", sum);

const average = calculateAverage(numbers);
console.log("Average of numbers:", average);
