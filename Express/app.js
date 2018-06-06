const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { getElementById, getIndexById, updateElement,
    createElement } = require('./utils');

// Set your desired listening port number.
const PORT = 4001;

// Acts as a static server.
app.use(express.static('public'));

// Direct the application to use json parsing with bodyParser.
app.use(bodyParser.json());

// Sample storage array.
const interns = [
    {
        id:     1,
        name:   'Loren Horowitz',
        age:    31,
        title:  'Software Engineering Intern'
    },
    {
        id:     2,
        name:   'Jason Willmore',
        age:    33,
        title:  'Software Engineering Intern',
    },
    {
        id:     3,
        name:   'Riki Montgomery',
        age:    31,
        title:  'Software Engineering Intern',
    }, 
    {
        id:     4,
        name:   'Sean Paternson',
        age:    25,
        title:  'Software Engineering Intern'
    }
];

/************************
 *  RESTful API calls   *
 ***********************/

// GET request methods.

app.get('/interns', (request, result, next) => {
    result.send(interns);
});

app.get('/interns/:id', (request, result, next) => {
    const intern = getElementById(request.params.id, interns);
    if (intern) {
        result.send(intern);
    } else {
        result.status(404).send();
    }
});

// POST request method.

app.post('/interns', (request, result, next) => {
    const newIntern = createElement('interns', request.query);
    if (newIntern) {
        interns.push(newIntern);
        result.status(201).send(newIntern);
    } else {
        result.status(404).send();
    }
});

// PUT request method.

app.put('/interns/:id', (request, result, next) => {
    const newInternIndex = getIndexById(request.params.id, interns);
    if (newInternIndex !== -1) {
        updateElement(request.params.id, request.query, interns);
        result.send(interns[newInternIndex]);
    } else {
        result.status(404).send();
    }
});

// DELETE request method.

app.delete('/interns/:id', (request, result, next) => {
    const deleteIndex = getIndexById(request.params.id, interns);
    if (deleteIndex !== -1) {
        interns.splice(deleteIndex, 1);
        result.status(204).send();
    } else {
        result.status(404).send();
    }
});


// Listen call should always be at the end of the file. 
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});