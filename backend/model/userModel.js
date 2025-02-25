const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    emailVerified : {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ['admin', "Merchant", "user"],
        default: "admin"
    },
    otp: String,
})

module.exports = mongoose.model("User", userSchema)