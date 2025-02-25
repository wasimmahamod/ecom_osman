const SubCategory = require("../model/subCategoryModel");

let addSubCategoryController = async (req, res) => {
    
    const { name,categoryId } = req.body;

    let existingCategory = await SubCategory.find({name: name.toLowerCase().trim()});

    if(existingCategory.length > 0) {
        return res.status(401).json({
            message : `Subcategory ${name} Already Exists`
        })
         
    } else {
        let category = new SubCategory({
            name: name.toLowerCase(),
            categoryId: categoryId
        });
        category.save()
        res.send({success : "Subcategory Created Successfully"})
    }

};

module.exports = addSubCategoryController