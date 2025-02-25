const mongoose = require("mongoose")
const {Schema} = mongoose

const categorySchema = new Schema({
    name: String,
    image: String,
    status : {
        type : String,
        enum : ["approve","waiting","reject"],
        default : "waiting"
    },
})

module.exports = mongoose.model("Category", categorySchema)