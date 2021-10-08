const { validationResult } = require('express-validator/check');

const Product = require('../models/product')
const Review =  require('../models/review')
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
        const product = await Product.findById(productId).populate({
            path: 'reviews',
            populate: {
                path: 'user'
            }
        })
        res.send(product)
    } catch (error) {
        console.log(error)
    }
}

const createReview = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { body, date, rating, user, productId } = req.body;
        const foundproduct = await Product.findById(productId);

        const review = new Review()
        review.body = body
        review.date = date
        review.rating = rating
        review.user = user
        review.productId = productId

        foundproduct.reviews.push(review)
        await foundproduct.save()
        await review.save()
        res.send('Review added!')
        
    } catch (error) {
        console.log(error)
    }
}

exports.getProducts = getProducts;
exports.getProduct = getProduct;
exports.createReview = createReview;