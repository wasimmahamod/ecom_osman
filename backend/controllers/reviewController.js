const Review = require("../model/review");

let reviewController = async (req, res) => {

    let {name,email,comment,rating,productId} = req.body
    
    let re = new Review ({
        name: name,
        email: email,
        message: comment,
        rating: rating,
        productId: productId
    }).save()

    
    res.send("Review submitted successfully")

    
};

module.exports = reviewController