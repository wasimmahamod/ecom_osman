const Category = require("../model/categoryModel");

let addCategoryController = async (req, res) => {
    const { name } = req.body;
    
    let existingCategory = await Category.find({name: name.toLowerCase().trim()});

    if(existingCategory.length > 0) {
        return res.status(401).json({
            message : `Category ${name} already exists`
        })
         
    } else {
        let category = new Category({
            name: name.toLowerCase(),
            image: `/uploads/${req.file.filename}`,

        })
        category.save()
        res.send({success : "category created successfully"})
    }    

};

module.exports = addCategoryController