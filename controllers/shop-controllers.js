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

        let totalRatings = 0;
        //get average number of ratings if product has ratings
        if (product.rating) {
            for (let review of product.reviews) {
                totalRatings = totalRatings + review.rating
            }
            
            product.rating = totalRatings / product.reviews.length
            await product.save()
        }
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
        res.send(review)
        
    } catch (error) {
        console.log(error)
    }
}

const deleteReview = async (req, res) => {
    const reviewId = req.body.id
    const productId = req.body.productId
    try {
        await Product.findByIdAndUpdate(productId, { $pull: { reviews: reviewId } })
        res.send('Review deleted!')
    } catch (error) {
        
    }
}

exports.getProducts = getProducts;
exports.getProduct = getProduct;
exports.createReview = createReview;
exports.deleteReview = deleteReview;