const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user.js');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017/authDemo')         //This is a promise
    .then(() => {
        console.log('CONNECTION OPEN')
    })
    .catch((err) => {
        console.log('ERROR')
        console.log(err)
    });

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'notagoodsecret',
    resave: false,
    saveUninitialized: false
}));

const requireLogin = (req, res, next) => {       //Middleware to check if a user is logged in or not
    if (!req.session.user_id){
        res.redirect('/login');
    }
    else{
        next();
    }
}

app.get('/', (req, res) => {
    res.send('This is the home page');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    }
    else {
        res.redirect('/login');
    }
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const user = new User({ username, password });
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/secret');
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    // req.session.destroy();  //We can also do this. The only difference is that this removes everything in req.session 
    res.redirect('/login');
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret');
})

app.listen(3000, () => {
    console.log('Server listening on PORT 3000');
})