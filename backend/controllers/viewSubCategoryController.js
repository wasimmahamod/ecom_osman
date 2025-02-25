const SubCategory = require("../model/subCategoryModel")

let viewSubCategoryController = async (req,res) => {
    
    let data = await SubCategory.find().populate("categoryId");

    res.send(data)
}

module.exports = viewSubCategoryController; 