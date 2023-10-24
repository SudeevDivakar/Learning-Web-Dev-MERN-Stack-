const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('We got a new request');              //shows up in terminal 
//     // res.send('Hello we got your request, this is a response');           //shows up in browser
//     // res.send({ color : 'red' });
//     res.send('<h1>This is my webpage!</h1>');
// })


app.get('/', (req, res) => {                               //Basically localhost:3000 (i.e. starting page)
    res.send('This is the home page');
})
app.get('/cats', (req, res) => {
    res.send('meow');
})
app.post('/cats', (req, res) => {
    res.send('Post Request to /cats. This is different than a get request');
})
app.get('/dogs', (req, res) => {
    res.send('woof');
})

app.get('/r/:subreddit/:postid' , (req, res) => {
    const{ subreddit , postid } = req.params;
    res.send(`<h1>Viewing Post ID : ${postid} on the ${subreddit} subreddit</h1>`);
})

app.get('/search' , (req, res) => {
    const{ name } = req.query;
    if(!name){
        res.send('Nothing Found If Nothing Searched');
    }
    res.send(`<h1>Search results for: ${name}</h1>`);
})

app.get('*', (req, res) => {
    res.send('I do not know that path');
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})