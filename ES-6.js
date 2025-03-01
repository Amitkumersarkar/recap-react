const numbers = [10, 20, 3, 40];
const student = {
    name: 'amit sarkar',
    age: 24,
    student: true,
    profession: ['jr software developer', 25000,]
}

// create an template string

const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]}`;
console.log(about);