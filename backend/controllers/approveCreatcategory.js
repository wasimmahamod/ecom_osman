const Category = require("../model/categoryModel");

let approveCreatcategory = async (req, res) => {
    
    const { id, status } = req.body;

    let updateCat =  await Category.findOneAndUpdate(
        { _id : id },
        { status: status == "waiting" ? "approve" : "waiting"},
        { new: true }
    );
    
 res.send("Updated")

};

module.exports = approveCreatcategory