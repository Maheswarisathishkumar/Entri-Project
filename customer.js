const express = require("express");
const router = express.Router();

// const {getAllCustomer,getCustomer,deleteCustomer,deleteAllCustomer,saveCustomer,updateCustomer
// } = require("../Controller/customerController");


// router.get("/",getAllCustomer);
// router.get("/:id",getCustomer);

// router.post("/",saveCustomer);
// router.patch("/:id",updateCustomer);

// router.delete("/:id",deleteCustomer);
// router.delete("/",deleteAllCustomer);



const customerController = require("../Controller/customerController");

router.get("/",getAllCustomer);

router.get('/', customerController.getAllCustomers);
router.get('/:id ', customerController.getCustomersById);
router.patch('/:id', customerController.updateCustomers);
router.delete('/:id', customerController.deleteCustomer);
router.get('/:createCustomer', customerController.createCustomers);


module.exports = router;