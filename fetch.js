// object to JSON and json to object conversion
// stringify used when object to json converting
// parse used when json to object conversion

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

// fetch 

