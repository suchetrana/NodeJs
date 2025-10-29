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
const logger =  (request, response, next) => {
    const data = request.body;
    next(); //calling next middleware
}
app.post('/user', logger, (request, response, next) => {
    const data = request.data;
    console.log("Incoming data: " + data);
    response.json(
        {
            "message": "successfully received data",
            "data": data
        });
    next()
})

app.listen(PORT, (request, response) => {
    response.send("Hi from express server")
})