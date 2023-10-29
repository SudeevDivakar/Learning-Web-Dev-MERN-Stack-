const express = require('express');
const app = express();
const path = require('path');   
const redditData = require('./data.json')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand : num });
})

app.get('/r/:subreddit' , (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    res.render('subreddit', {name : data.name , description : data.description , posts : data.posts});
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})