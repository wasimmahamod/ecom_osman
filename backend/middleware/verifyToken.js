var jwt = require('jsonwebtoken');

let verifyToken = (req,res,next) => { 

const token = req.headers.token;

if (!token) {
  return res.status(401).json({message: "Token is required"})
} else {
    jwt.verify(token, process.env.JWT_PASS, function (err, decoded) {
        console.log(decoded);
        if (decoded) {
            next();
        }else {
            res.status(401).json({message: "Validation Token is required"})
        }
    })
}

}

module.exports = verifyToken; 

