//Importing packages
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const Product = require('./models/product.js')

//Enabling form data for post requests
app.use(express.urlencoded({ extended : true }));

//Method override for patch/put/etc requests
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

//Database connection
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

//Setting view engine and directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

const categories = ['fruit', 'vegetables', 'dairy'];

//Routes
app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index',{products});
})

app.get('/products/new', (req, res) => {
    res.render('products/new', {categories});
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show', {product});
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', {product, categories});
})

app.put('/products/:id', async (req, res) => {
    const product = req.body;
    const { id } = req.params;
    //await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    await Product.updateOne({_id: id}, {$set: {name: product.name, price: product.price, category: product.category}}, {runValidators: true});
    res.redirect(`/products/${id}`);    
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.deleteOne({_id: id});
    res.redirect('/products');
})

app.listen(3000, () => {
    console.log('Server Open on Port 3000');
})