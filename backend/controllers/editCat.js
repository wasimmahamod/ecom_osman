const Category = require("../model/categoryModel");

let editCategoryController = async (req, res) => {
  
    try {
        const { name, oldname } = req.body;

        let existingCategory = await Category.find({name: name});
    
        if(existingCategory.length > 0) {
            return res.status(401).json({
                message : `category ${name} Already Exists`
            })
             
        } else {
            let a = await Category.findOneAndUpdate(
               { name: oldname},
               { name: name},
               { new: true },
            );
       
            res.send({success : "Category Updated"})
        }

    } catch (err) {
        console.log(err);
     }

};

module.exports = editCategoryController