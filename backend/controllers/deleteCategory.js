const Category = require("../model/categoryModel");

let deleteCategory = async (req, res) => {

    await Category.findOneAndDelete(req.params.id);

    res.send("delete category")

};

module.exports = deleteCategory;