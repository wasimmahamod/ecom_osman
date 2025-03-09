const express = require('express');
const route = express.Router()

const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
})

const upload = multer({ storage: storage })

const addCategoryController = require('../../controllers/addCategoryController');
const addSubCategoryController = require('../../controllers/addSubCategory');
const viewSubCategoryController = require('../../controllers/viewSubCategoryController');
const viewCategoryController = require('../../controllers/viewCategoryController');
const verifyToken = require('../../middleware/verifyToken');
const secureApi = require('../../middleware/secureApi');
const productController = require('../../controllers/productController');
const allProController = require('../../controllers/allProController');
const deleteCategory = require('../../controllers/deleteCategory.js');
const approveCreatcategory = require('../../controllers/approveCreatcategory.js');
const editCategoryController = require('../../controllers/editCat.js');
const singlePro = require('../../controllers/singlePro.js');
const singleSubCat = require('../../controllers/singleSubCat.js');
const cartController = require('../../controllers/CartController.js');
const allCartController = require('../../controllers/allCartController.js');
const flashSaleController = require('../../controllers/flashSaleController.js');
const reviewController = require('../../controllers/reviewController.js');
const getReviewController = require('../../controllers/getReviewController.js');
const getFlashSaleController = require('../../controllers/getFlashSaleController.js');




route.post('/creatcategory', secureApi, verifyToken, upload.single('avatar'), addCategoryController);
route.post('/approvecreatcategory', approveCreatcategory);
route.post('/creatsubcategory', upload.single('avatar'), addSubCategoryController);
route.post('/creatproduct', upload.array('photos', 12), productController);
route.post('/editcat', editCategoryController);
route.post('/cart', cartController);
route.post('/review', reviewController);
route.post('/flashsale', flashSaleController);


route.delete('/deletecategory/:id', deleteCategory);

route.get('/allpro', allProController);
route.get('/allcat', viewCategoryController);
route.get('/allsubcat', viewSubCategoryController);
route.get('/singlepro/:slug', singlePro);
route.get('/singlesubcat/:id', singleSubCat);
route.get('/allcart', allCartController);
route.get('/review/:id', getReviewController);
route.get("/flashsale", getFlashSaleController)

module.exports = route