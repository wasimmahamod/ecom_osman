const Product = require("../model/product");

let allProController = async (req, res) => {
  
    let data = await Product.find();

    res.send(data)

};

module.exports = allProController