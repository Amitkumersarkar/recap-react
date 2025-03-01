// JSON

const student = {
    name: 'amit sarkar',
    age: 24,
    student: true,
    profession: ['jr software developer', 25000,]
}

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);