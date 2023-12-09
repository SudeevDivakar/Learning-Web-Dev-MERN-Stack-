const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')         //This is a promise
.then(() => {
    console.log('CONNECTION OPEN')
})
.catch((err) => {
    console.log('ERROR')
    console.log(err)
});


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    onSale: {
        type: Boolean,
        default: false
    }
});

productSchema.methods.greet = function(){
    console.log('Nahhhh, yall need to dip');
    console.log(`- ${this.name}`)
}

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.statics.fireSale = function() {
    return this.updateMany({}, {onSale: true, price: 0})
}

const Product = mongoose.model('Product', productSchema);

// const bike = new Product({name: 'Mountain Bike', price: 599})    //since both name and price are required, we need to pass in valid inputs (price can be a string but it should only contain numbers)
// bike.save()
// bike.greet()

const findProduct = async function () {
    const foundProduct = await Product.findOne({name: 'Mountain Bike'});
    foundProduct.greet();

    console.log(foundProduct);
    await foundProduct.toggleOnSale()
    console.log(foundProduct);
}
findProduct();


Product.fireSale()
.then((res) => {
    console.log(res)
});