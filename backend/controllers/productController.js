const Product = require("../model/product");

let productController = async (req, res) => {

    const { name , discription, slug, catId, proType, regularprice, discount} = req.body;

        let arr = []

        req.files.map(item=>{
            arr.push(`/uploads/${item.filename}`)
        })

        let product = new Product({
            name: name,
            discription : discription,
            image: arr,
            slug: slug,
            catId: catId,
            proType : proType,
            regularprice : regularprice,
            discount : discount
        });


        
        product.save()
        res.send({success : "Product created successfully"})

};

module.exports = productController