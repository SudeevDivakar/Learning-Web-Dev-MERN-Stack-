const mongoose = require('mongoose');
const Product = require('./models/product.js')

async function connect(){
    try{
        console.log('CONNECTION OPENED');
        return await mongoose.connect('mongodb://127.0.0.1:27017/FarmStand');
    }
    catch{
        console.log('ERROR IN CONNECTION');
    }
} 
(async () => {
    await connect();
})();

// const p = new Product({
//     name: 'Orange',
//     price: 30,
//     category: 'fruit'
// })
// p.save()
// .then(p => {
//     console.log(p)
// })
// .catch(e => {
//     console.log(e)
// });

const seedProducts = [
    {
        name: 'Guava',
        price: 45,
        category: 'fruit'
    },
    {
        name: 'cucumber',
        price: 25,
        category: 'vegetables'
    },
    {
        name: 'Potato',
        price: 20,
        category: 'vegetables'
    },
    {
        name: 'milk',
        price: 20,
        category: 'dairy'
    },
    {
        name:'cheese',
        price: 50,
        category: 'dairy'
    }
]
Product.insertMany(seedProducts)
.then(p => {
    console.log(p)
})
.catch(e => {
    console.log(e)
});