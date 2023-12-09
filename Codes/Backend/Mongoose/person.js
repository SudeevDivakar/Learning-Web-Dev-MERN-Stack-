const mongoose = require('mongoose');

async function connect(){
    try{
        console.log('CONNECTION OPENED');
        return await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');         //This is a promise
    }
    catch{
        console.log('ERROR IN CONNECTION');
    }
} 

(async () => {
    await connect();
})();

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`  //This behaves like an actual property
});

personSchema.pre('save', async function() {
    this.first = 'DEEZ';
    this.last = 'NUTS';
    console.log('ABOUT TO SAVE');
});
personSchema.post('save', async function() {
    console.log('JUST SAVED');
});

const Person = mongoose.model('Person', personSchema);

const Sudeev = new Person({first: "Sudeev", last: "Divakar"});
console.log(Sudeev.fullName);

Sudeev.save().then((res) => {
    console.log(res);
})