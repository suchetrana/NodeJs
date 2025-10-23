const express = require('express');

const PORT = 5000;

const app = express();

app.get('/home', (request, response) => {
    response.json(
        {
            "name": "Suchet Rana",
            "age": 21,
            "company": "Bloomberg"
        }
    );
})

app.post('/user', (request, response) => {
    const data = request.data;
    console.log("Incoming data: " + data);
    response.json(
        {
            "message": "successfully received data",
            "data": data
        });
})
app.listen(PORT, (request, response) => {
    response.send("Hi from express server")
})