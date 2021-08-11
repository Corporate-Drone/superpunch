const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        rating: { type: Number, required: true },
        reviews: [
            {
                //acquire comment ID & populate using Comment model
                type: Schema.Types.ObjectId,
                ref: 'Review'
            }
        ]
    }
);


module.exports = mongoose.model('Product', productSchema);