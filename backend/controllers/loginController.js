const emailValidation = require("../Validations/emailValidation");
const User = require("../model/userModel");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


let loginController = async (req,res) =>{
    
    const { email, password } = req.body;

    let findUser = await User.findOne({ email: email});

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

    if(findUser){
        bcrypt.compare(password, findUser.password, function(err, result) {

            var token = jwt.sign({ id: findUser._id, email:findUser.email }, process.env.JWT_PASS, { expiresIn: "24h" });

            if (result) {
                return res.status(200).json({
                    message : `Login Successfully`,
                    token : token,
                    email : findUser.email,
                    name : findUser.name,
                    role : findUser.role
                })
            } else {
                return res.status(401).json({
                    message : `Invalid Email & password`
                })
            }
        });
    }else{
        return res.status(401).json({
            message : `Invalid Email & password`
        })
    }
    }

module.exports = loginController;