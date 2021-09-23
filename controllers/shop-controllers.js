const Product = require('../models/product')

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (error) {

    }
}

const getProduct = async (req, res) => {
    const productId = req.query.id
    try {
        const product = await Product.findById(productId)
        res.send(product)
    } catch (error) {
        console.log(error)
    }
}

exports.getProducts = getProducts;
exports.getProduct = getProduct;