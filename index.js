const express = require ('express');
const app = express();

let data_old = [{ "username": "ali", "hair_color": "brown", "height": 1.2 }, { "username": "marc", "hair_color": "blue", "height": 1.4 }, { "username": "joe", "hair_color": "brown", "height": 1.7 }, { "username": "zehua", "hair_color": "black", "height": 1.8 }];

let data_new = {"h":["username","hair_color","height"],"d":[["ali","brown",1.2],["mar c","blue",1.4],["joe","brown",1.7],["zehua","black",1.8]]};

app.get('/', (req, res) => {
    res.send('Hellow World');
});

app.get('/api/data_test', (req, res) => {
    res.send(data_old)
});

app.get('/api/data_new', (req, res) => {
    res.send(data_new)
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen to port ${port}..... `))
