const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());


const candidates = [
    { id: 1, name: 'Aarav Sharma', skills: 'Java, Spring Boot', yearsOfExperience: 5 },
    { id: 2, name: 'Vivaan Gupta', skills: 'JavaScript, React', yearsOfExperience: 3 },
    { id: 3, name: 'Aditya Verma', skills: 'Python, Flask', yearsOfExperience: 4 },
    { id: 4, name: 'Sai Patel', skills: 'C#, ASP.NET', yearsOfExperience: 6 },
    { id: 5, name: 'Anaya Rao', skills: 'JavaScript, Node.js', yearsOfExperience: 2 },
    { id: 6, name: 'Rohan Iyer', skills: 'Ruby, Ruby on Rails', yearsOfExperience: 7 },
    { id: 7, name: 'Diya Nair', skills: 'PHP, Laravel', yearsOfExperience: 4 },
    { id: 8, name: 'Karan Singh', skills: 'Go, Docker', yearsOfExperience: 5 },
    { id: 9, name: 'Sneha Joshi', skills: 'Swift, iOS Development', yearsOfExperience: 3 },
    { id: 10, name: 'Arjun Mehta', skills: 'C++, Qt', yearsOfExperience: 8 },
];


app.get('/api/candidates', (req, res) => {
    res.json(candidates);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});