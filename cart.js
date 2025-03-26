const express = require('express');
const router = express.Router();

const cartController = require("../Controller/cartController");
router.get('/list', cartController.getCartItems);
router.get('/list', cartController.updateCart);





module.exports = router;