const mongoose = require("mongoose")
const { Schema } = mongoose

const flashSaleSchema = new Schema({
    time: String,
    productId: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
});

module.exports = mongoose.model("FlashSale", flashSaleSchema);