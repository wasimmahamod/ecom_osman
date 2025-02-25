const Cart = require("../model/cartModel");

let cartController = async (req, res) => {

    const {productId, userId, quantity} = req.body

    let existingCart = await Cart.findOne({productId:productId, userId:userId})

    if(existingCart) {

        if (req.query.type) {
            
            if (req.query.type == "plus") {
                await Cart.findByIdAndUpdate({_id:existingCart._id},{quantity: existingCart.quantity+1})
            }else{
                if(existingCart.quantity > 1) {
                    await Cart.findByIdAndUpdate({_id:existingCart._id},{quantity: existingCart.quantity-1})               
                } else {
                    await Cart.findByIdAndDelete(existingCart._id)
                }
            }
    
            res.send({success : "Cart updated Successfully"})
    
        } else { 
            await Cart.findByIdAndUpdate({_id:existingCart._id},{quantity: existingCart.quantity+1})
        }
      
    }else {
        let Cart = new Cart({
            productId:productId,
            userId:userId,
            quantity: quantity ? quantity : 1
        })
        Cart.save()
        res.send({success : "Cart Added Successfully"})
    }

};

module.exports = cartController
