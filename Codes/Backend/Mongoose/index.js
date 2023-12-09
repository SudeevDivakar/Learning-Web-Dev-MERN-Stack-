const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')         //This is a promise
.then(() => {
    console.log('CONNECTION OPEN')
})
.catch((err) => {
    console.log('ERROR')
    console.log(err)
});

const movieSchema = new mongoose.Schema({
    title: {
        type: String
    },
    year: {
        type: Number
    },
    score: {
        type: Number
    },
    rating: {
        String
    } 
});
const Movie = mongoose.model('movies123', movieSchema);

// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });
// amadeus.save()



// Movie.insertMany([
//     { title: 'Avengers', year: 2012, score: 8, rating: 'R' },
//     { title: 'Black Panther', year: 2018, score: 7.3, rating: 'R' },
//     { title: 'Spiderman-2', year: 2004, score: 7.5, rating: 'R' }
// ])
// .then(() => {
//     console.log('Insertion Succesful')
// })
// .catch(() => {
//     console.log('Insertion not Successful')
// })



// Movie.find({})
// .then((data) => {
//     console.log(data)
// })



// Movie.updateOne({title : 'Amadeus'}, {year : 1984})
// .then((res) => {
//     console.log(res)
// });

// Movie.updateMany({title: {$in: ['Amadeus', 'Stand By Me']}}, {score: 10})
// .then((res) => {
//     console.log(res)
// });



Movie.deleteOne({title: 'Amadeus'})
.then((res) => {
    console.log(res)
});

Movie.deleteMany({year: {$lt: 2015}})
.then((res) => {
    console.log(res)
});