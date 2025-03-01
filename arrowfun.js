// simple arrow function
const getFifty = () => 50;
// single parameterized arrow function declaration
const addSixty = num => num + 60;
// checking number is even or not

const isEven = x => x % 2 == 0;

// multiple parameter arrow function
const addThree = (x, y, z) => x + y + z;
const result = addThree(10, 20, 15);
console.log(result);

// multiline parameter
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}