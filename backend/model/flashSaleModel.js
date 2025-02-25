const mongoose = require("mongoose")
const {Schema} = mongoose

const flashSaleSchema = new Schema ({
    time : String,
    idlist : [String]
});

module.exports = mongoose.model("FlashSale", flashSaleSchema);