const express = require ('express');
const app = express();

let data_old = [{ "username": "ali", "hair_color": "brown", "height": 1.2 }, { "username": "marc", "hair_color": "blue", "height": 1.4 }, { "username": "joe", "hair_color": "brown", "height": 1.7 }, { "username": "zehua", "hair_color": "black", "height": 1.8 }];

// let data_new = {"h":["username","hair_color","height"],"d":[["ali","brown",1.2],["mar c","blue",1.4],["joe","brown",1.7],["zehua","black",1.8]]};
// let data_x = JSON.stringify(data_new);
let data_x = JSON.parse(JSON.stringify(data_old));

const compress = (data = [], h = Object .keys (data [0] || {})) => 
  ({h, d: data .map (o => h .map (key => o [key]))})

console.log (compress (data_old));


app.get('/', (req, res) => {
    res.send('Hellow World');
});

app.get('/api/data_test', (req, res) => {
    res.send(data_x)
    console.log(data_x)
});

app.get('/api/data_new', (req, res) => {
    res.send(data_x)
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen to port ${port}..... `))
