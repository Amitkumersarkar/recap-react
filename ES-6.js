const numbers = [10, 20, 1986804513, 40];
const student = {
    name: 'amit sarkar',
    age: 24,
    student: true,
    profession: ['jr software developer', 25000,]
}

// create an template string

const about = `My name is ${student.name} . and i am ${student.age} years old. here is my personal phone number ${numbers[2]}. i am also an ${student.profession[0]}`;
console.log(about);