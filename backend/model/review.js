const mongoose = require("mongoose")
const {Schema} = mongoose

const reviewSchema = new Schema({

    name: {
        type: String,
    },

    email: {
        type: String,
    },

    rating: {
        type: String,
    },

    message: {
        type: String,
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },   
    
});

module.exports = mongoose.model("Review", reviewSchema)