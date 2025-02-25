const User = require("../model/userModel")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const newpassController = async (req,res) =>{

const {password, token} = req.body

var decorded = jwt.verify(token, process.env.JWT_PASS);

bcrypt.hash(password, 10, async function(err, hash) {
    
await User.findOneAndUpdate({email:decorded.email},{password:hash})
res.send({success: "password updated Done"})

});
console.log(password, token);
}

module.exports = newpassController;