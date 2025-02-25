const Subcategory = require("../model/subCategoryModel");

let singleSubCat = async (req, res) => {
    
    const { id } = req.params;

    let data = await Subcategory.find({categoryId: id})

    res.send(data)

};

module.exports = singleSubCat