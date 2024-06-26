const orderItemModel = require("../Models/orderItemModel");

// Function gets all the order_item
const getAllOrderItems = async (req, res) => {
  try {
    const order_item = await orderItemModel.getAllOrderItems();
    res.status(200).json(order_item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to get order by ID
const getOrderItemById = async (req, res) => {
  try {
    const order = await orderItemModel.getOrderItemById(req.params.order_id);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ error: "orderItem not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to create order
const createOrderItem = async (req, res) => {
  try {//.orderItem.create{}
    const neworderItem = await orderItemModel.createOrderItem(req.body);
    res.status(201).json(neworderItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// // Function to update order
// const updateOrderItem = async (req, res) => {
//   try {
//     const updatedorderItem = await orderItemModel.updateOrderItem(
//       req.params.order_item_id,
//       req.body
//     );
//     if (updatedorderItem) {
//       res.status(200).json(updatedorderItem);
//     } else {
//       res.status(404).json({ error: "orderItem not found" });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Function to delete order
// const deleteOrderItem = async (req, res) => {
//   try {
//     const deletedOrderItem = await orderItemModel.deleteOrderItem(req.params.order_item_id);
//     if (deletedOrderItem) {
//       res.status(200).json(deletedOrderItem);
//     } else {
//       res.status(404).json({ error: "orderItem not found" });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

//export the functions
module.exports = {
    getAllOrderItems,
    getOrderItemById,
    createOrderItem,
    // updateOrderItem,
    // deleteOrderItem,
  };
  
