const express = require('express')
const route = express.Router()
const registrationController = require("../../controllers/registrationController")
const secureApi = require('../../middleware/secureApi');
const otpController = require('../../controllers/otpController');
const loginController = require('../../controllers/loginController');
const forgotpassController = require('../../controllers/forgotpassController');
const linkvarificationController = require('../../controllers/linkvarificationController');
const newpassController = require('../../controllers/newpassController');
const resentverifationController = require('../../controllers/resentverifationController');


route.post('/registration', secureApi, registrationController);
route.post('/login', loginController);
route.post('/otpvarification', otpController);
route.post('/linkvarification', linkvarificationController);
route.post('/forgotpass', forgotpassController);
route.post('/newpasscontroller', newpassController);
route.post('/resentverifation', resentverifationController);

module.exports = route