const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: 'Mithuna', age: 20, department: 'CSE' },
    { id: 2, name: 'Priya', age: 21, department: 'CSE' }
];

app.get('/', (req, res) => {
    res.send('Student API is running successfully!');
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    const student = {
        id: students.length + 1,
        ...req.body
    };
    students.push(student);
    res.status(201).json(student);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});