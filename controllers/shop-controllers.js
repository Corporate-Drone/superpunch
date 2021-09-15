const Product = require('../models/product')

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        
    }
}

exports.getProducts = getProducts;