const User = require("../model/userModel")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator')
var jwt = require('jsonwebtoken');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "engosmanhossain100@gmail.com",
    pass: "iqjm qcbp yfal cgqd",
  },
});

const resentverifationController = async (req,res) =>{

    const {email} = req.body;

    let findUser = await User.find({email:email})
    
    if (findUser.emailVerified) {
        return res.send({error : `${email} user already verified`});
      } else {
        jwt.sign({ email: email }, process.env.JWT_PASS , async function(err, token)  {
          const info = await transporter.sendMail({
            // from: 'engosmanhossain100@gmail.com', // sender address
            to: email, // list of receiver
            subject: "Reset Your Verifaction Link ", // Subject line
            html: `<a href="http://localhost:5173/emailverification/${token}">Click Hare<a/>` // html body
          });

          res.send("email send")
      });
      }
}

module.exports = resentverifationController