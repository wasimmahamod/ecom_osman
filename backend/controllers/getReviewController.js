const Review = require("../model/review");

let getReviewController = async (req, res) => {

    const { id } = req.params;

    console.log(id, "ami review");

    try {
        let data = await Review.find({ productId: id })

        res.send({ data: data })
    } catch (error) {
        res.send(error)
    }


};

module.exports = getReviewController