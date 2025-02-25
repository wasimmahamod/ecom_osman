const mongoose = require("mongoose")
const {Schema} = mongoose

const cartSchema = new Schema({

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    
    quantity: Number,

})

module.exports = mongoose.model("Cart", cartSchema)