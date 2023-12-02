const express = require('express');
const app = express();
const path = require('path');
const { v4 : uuid } = require('uuid');
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(methodOverride('_method'));  
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

let comments = [
    { 
        id : uuid(),
        username : 'Sudeev',
        comment : 'Hehe Lol'
    },
    {
        id : uuid(),
        username : 'Sk8r boi',
        comment : 'Nahhhh fam'
    },
    {
        id : uuid(),
        username : 'Disha',
        comment : 'OMG SUDEEV >>>>> <3'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    const newComment = { username : username , comment : comment, id : uuid() };
    comments.push(newComment);
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText; 
    res.redirect('/comments');
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})