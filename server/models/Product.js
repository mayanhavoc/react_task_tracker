const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    selected: {
        type: Boolean,
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;