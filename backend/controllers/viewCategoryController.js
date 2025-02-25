const Category = require("../model/categoryModel")

let viewCategoryController = async (req,res) => {
    
    let data = await Category.find();

    res.send(data)
}

module.exports = viewCategoryController; 