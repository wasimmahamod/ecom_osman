const User = require("../model/userModel")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator')
var jwt = require('jsonwebtoken');
const nameValidation = require("../Validations/nameValidation");
const emailValidation = require("../Validations/emailValidation");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "engosmanhossain100@gmail.com",
    pass: "iqjmqcbpyfalcgqd",
  },
});

let registrationController = async (req, res) => {

 const { name, email, password } = req.body;

 if(!name || !email || !password) {
  return res.send("Please fill the all fields")
 }

 if (!nameValidation(name)){
  return res.status(401).json({ 
    message : `Invalid Name`
})
}

if (!emailValidation(email)) {
  return res.status(401).json({ 
    message : `Invalid Email`
})
}

 if(password.length < 6 || password.length > 10) {
 return res.status(401).json({
  message : `Password must be between 6 and 10 characters`
 })
}

let existingUser = await User.find({email:email})


if (existingUser.length > 0) {
  return res.status(400).json({ 
    message : `Email already exists`
})} else {
  
  let otp =  otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

  bcrypt.hash(password, 10, async function(err, hash) {

    jwt.sign({ email: email }, process.env.JWT_PASS , async function(err, token){
      
      const info = await transporter.sendMail({
        // from: 'engosmanhossain100@gmail.com', // sender address
        to: email, // list of receiver
        subject: "Hello ✔", // Subject line
        html: `<a href="http://localhost:5173/emailverification/${token}">Click Hare<a/>` // html body
        
      });
   console.log(token);
    });
    
    // setTimeout(async ()=>{
    //  await User.findOneAndUpdate({ email:email }, {otp:""});
    //  console.log("done done");
    // },10000)

  const user = new User ({
  name: name,
  email: email,   
  password: hash,
  otp:otp

});

user.save();

res.send({
  name: user.name,
  email: user.email,
  role: user.role
});
});
}

};

module.exports = registrationController