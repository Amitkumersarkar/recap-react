// array destructuring

const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// console.log(x, y);

// shortcut way to array destructuring

const [x, y] = [42, 65];
// console.log(x, y);

// critical way array destructuring

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

console.log(boxify(90, 34));