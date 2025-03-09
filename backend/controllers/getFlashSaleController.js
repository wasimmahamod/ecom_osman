const flashSaleModel = require("../model/flashSaleModel")

async function getFlashSaleController(req, res) {

    let flashsale = await flashSaleModel.findOne().populate("productId")
    res.send(flashsale)
}

module.exports = getFlashSaleController