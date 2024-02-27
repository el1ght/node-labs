const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/static', (req, res) => {
    res.sendFile(__dirname + '/views/static.html')
})

app.listen(3000, () => {
    console.log('Воно працює!!! (порт: 3000)');
})

