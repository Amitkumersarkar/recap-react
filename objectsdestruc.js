// objects destructuring

// const { name, age } = { name: 'amit', age: 24 };
// const { job, salary } = { job: 'software engineer', salary: 24000 };

const students = {
    name: 'Amit Sarkar',
    id: 22235103283,
    dept: 'CSE',
    int: 51,
    sec: 7,
    programmingLanguage: ['C', 'C++', 'Javascript', 'Python'],
    specification: {
        height: 168,
        weight: 52,
        address: 'Dhaka'
    }

}

const { name, id } = students;
const { height, weight } = students.specification;
console.log(students.name);