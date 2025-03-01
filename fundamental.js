// how to declared a variable using let and const
const fatherName = 'Anonda';
let season = 'summer';
season = 'winter';

// conditions apply system:
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

// array declaration system
// index,length, push,pop,
const numbers = [10, 20, 3, 40];
// changing index number
numbers[0] = 50;

//for loop declaration system
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(number);
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
//3ways to access property by name
const student = {
    name: 'amit',
    age: 24,
    student: true,
    profession: ['jr software developer', 25000,]
}
// access the property here
console.log(student.profession);

