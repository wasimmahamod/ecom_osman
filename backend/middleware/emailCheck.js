const User = require('../model/userModel');

const emailCheck = async (req, res, next) => {

    const { email } = req.body;

    const user = await userModel.findOne({ email: email });

    if (!email) {
      return res.status(400).send("Valid Email Required");
    }

    if (user.emailVerified) {
      next();
    } else {
      return res.status(401).send("Please Verify your email");
    }
  
};

module.exports = emailCheck;