// how to declared a variable using let and const
const fatherName = 'Anonda';
let season = 'summer';
season = 'winter';

// conditions:
// 6 basic conditions: >,<,>=,<=,&&,||,===,!==
// multiple conditions: &&, ||

if (fatherName === 'Anonda' || season === 'summer') {
    // console.log(season);

}
else if (fatherName === 'Anonda') {
    // console.log(fatherName);
}
else {
    // console.log(season);
}

// array declaration
// index,length, push,pop,
const numbers = [10, 20, 3, 40];
// changing index number
numbers[0] = 50;

//for loop declaration
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(numbers);
}

// function declaration system
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

// calling the function

const output = multiply(10, 2);

console.log(output);

// object declaration system


