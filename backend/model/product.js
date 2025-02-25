const mongoose = require("mongoose")
const {Schema} = mongoose

const productSchema = new Schema({
    name: String,
    discription: String,
    image: [String],
    regularprice : String,
    discount : String,
    slug: String,
    proType : String,
    catId : {
        type: Schema.Types.ObjectId,
        ref:"Category" 
    },

});

module.exports = mongoose.model("Product", productSchema)