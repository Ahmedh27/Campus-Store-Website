const express = require("express"); //Importing and Initializing Express
const router = express.Router();
const orderController = require("../controllers/orderController");

// get all the Orders
router.get("/", orderController.getAllOrders);
//get order by ID
router.get("/:order_id", orderController.getOrderById);
//add a new order
router.post("/", orderController.createOrder);
//create a new order
router.put("/:order_id", orderController.updateOrder);

//add items to a order
router.post("/:order_id/items", orderController.addItemsInOrder);


//delete a order
router.delete("/:order_id", orderController.deleteOrder);

//get OrderTotal
router.get("/:order_id/total", orderController.getOrderTotal);




module.exports = router;