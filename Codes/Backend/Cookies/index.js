const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('thisIsMySecretString'));

app.get('/greet', (req, res) => {
    const { animal = 'dog', name = 'sudeev'} = req.cookies;
    res.send(`Hey there ${name} you ${animal}`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie chicks');
    res.cookie('animal', 'shrimp');
    res.send('OK SENT YOU A COOKIE');
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('OK SIGNED YOUR FRUIT COOKIE');
})

app.get('/verifyFruit', (req, res) => {
    // res.send(req.cookies);                     //only returns cookies that are not signed
    res.send(req.signedCookies);                 //only returns signed cookies
})

app.listen(3000, () => {
    console.log('Server open on PORT 3000');
})