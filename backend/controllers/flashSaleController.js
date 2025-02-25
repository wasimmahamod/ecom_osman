const FlashSale = require("../model/flashSaleModel");

async function flashSaleController(req, res) {


    const { ftime, idlist } = req.body;
    console.log(ftime)

    // let arr = idlist.split(",");

    let existing = await FlashSale.find()

    if (existing.length > 0) {

        await FlashSale.findByIdAndUpdate({ _id: existing[0]._id }, { time: ftime })

    } else {
        let time = new FlashSale({
            time: ftime,
            idlist: idlist
        })
        time.save()

        res.send({ success: "Subcategory Created Successfully" })
    }

}

module.exports = flashSaleController
