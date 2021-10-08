const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    body: { type: String, required: true },
    date: { type: String, required: true },
    rating: { type: Number, required: false },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    productId: { type: String, required: true }
});

module.exports = mongoose.model("Review", reviewSchema);