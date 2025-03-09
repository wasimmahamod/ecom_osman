const FlashSale = require("../model/flashSaleModel");

async function flashSaleController(req, res) {


    const { ftime, productid } = req.body;



    // let arr = idlist.split(",");

    let existing = await FlashSale.find()

    if (existing.length > 0) {

        await FlashSale.findByIdAndUpdate({ _id: existing[0]._id }, { time: ftime })

    } else {
        let time = new FlashSale({
            time: ftime,
            productId: productid
        })
        time.save()

        res.send({ success: "flashsale Created Successfully" })
    }

}

module.exports = flashSaleController
