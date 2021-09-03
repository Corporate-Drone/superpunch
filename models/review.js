const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    body: { type: String, required: true },
    date: { type: String, required: true },
    rating: { type: Number, required: false },
    editDate: String,
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model("Review", reviewSchema);