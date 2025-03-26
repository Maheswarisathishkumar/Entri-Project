const express = require('express');
const router  = express.Router();

const orderController = require("../Controller/orderController");
router.get('/list', orderController.getAllOrders);

module.exports=router;