const express = require('express');
const router = express.Router();

const paymentController = require("../Controller/paymentController");
router.get('/list', paymentController.getAllPayments);





module.exports = router;