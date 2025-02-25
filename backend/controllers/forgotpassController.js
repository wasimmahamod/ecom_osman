const User = require("../model/userModel")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "engosmanhossain100@gmail.com",
      pass: "iqjm qcbp yfal cgqd",
    },
  });

let forgotpassController = async (req, res) => {

const {email} = req.body;

let existingUser = await User.find({email:email})

if(existingUser.length > 0) {

jwt.sign({ email: email }, process.env.JWT_PASS , async function(err, token)  {
  
    const info = await transporter.sendMail({
      // from: 'engosmanhossain100@gmail.com', // sender address
      to: email, // list of receiver
      subject: "This is your change password Link", // Subject line
      html: `<a href="http://localhost:5173/newpassword/${token}">Click Hare<a/>` // html body
    })
  });

  res.send("check your email") 
  
}else{
  return res.status(401).json({
    message : `User not found`
})
};
}

module.exports = forgotpassController