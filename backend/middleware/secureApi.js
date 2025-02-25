let secureApi = (req,res,next) => {

    if(req.headers.authorization == '000000') {
        next();
    } else {
        res.status(401)
        res.send({error : 'unauthorized api'})
    }
    
}

module.exports = secureApi