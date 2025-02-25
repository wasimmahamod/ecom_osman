const User = require("../model/userModel");
var jwt = require('jsonwebtoken');

let linkvarificationController = async (req,res) =>{
    
    const { token } = req.body

    var decoded = jwt.verify(token, process.env.JWT_PASS);

    let findUser = await User.findOne({ email: decoded.email});

    if (!findUser.emailVerified) {
        await User.findOneAndUpdate({ email:decoded.email }, {otp: "", emailVerified:true});
        res.send("link milse")
    } else {
       res.send("link mile nai");
    }

    console.log(token);
    console.log(decoded.email);
    
}

module.exports = linkvarificationController;