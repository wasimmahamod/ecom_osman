const Product = require("../model/product");

let singlePro = async (req, res) => {
    const { slug } = req.params;

    let data = await Product.find({slug: slug})

    res.send(data)

};

module.exports = singlePro