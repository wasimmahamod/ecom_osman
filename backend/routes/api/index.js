const express = require('express')
const route = express.Router()

const auth = require('./auth')
const productroutes = require('./productroutes')

route.use('/auth', auth)
route.use('/product', productroutes)

module.exports = route