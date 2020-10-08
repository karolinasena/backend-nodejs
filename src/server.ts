import express, { request, response } from 'express';

const app = express();

app.use(express.json());

const users = [
    'Ana',
    'Gabriel',
    'Maria',
    'João',
];

app.get('/users', (request, response) => {
    response.json(users);
});

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUser = search ? users.filter(user => user.includes(search)) : users;

    response.json(filteredUser);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);