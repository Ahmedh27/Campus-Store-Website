const express = require("express"); //Importing and Initializing Express
const router = express.Router();
const orderItemController = require("../controllers/orderItemController");

// get all the orderItems
router.get("/", orderItemController.getAllOrderItems);


//get orderItem by ID
router.get("/:order_item_id", orderItemController.getOrderItemById);

//add a new orderItem
router.post("/", orderItemController.createOrderItem);

// //update a new orderItem
// router.put("/:order_item_id", orderItemController.updateOrderItem);
// //delete a orderItem
// router.delete("/:order_item_id", orderItemController.deleteOrderItem);


module.exports = router;