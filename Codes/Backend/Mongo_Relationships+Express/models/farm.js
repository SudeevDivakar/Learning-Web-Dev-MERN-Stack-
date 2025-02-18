const mongoose = require('mongoose');
const Product = require('./product');

const farmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email Required']
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

farmSchema.post('findOneAndDelete', async function (farm) {    //We use post middleware as we will not have access to data in pre middleware
    if(farm.products.length){
        const res = await Product.deleteMany({_id: { $in: farm.products}});
    }
})

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;