// const express = require("express");
// const router = express.Router();
const orderModel = require("../Models/orderModel");

// Function gets all the orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to get order by ID
const getOrderById = async (req, res) => {
  try {
    const order = await orderModel.getOrderById(req.params.order_id);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to create order
const createOrder = async (req, res) => {
  try {
    const newOrder = await orderModel.createOrder(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to update order
const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await orderModel.updateOrder(
      req.params.order_id,
      req.body
    );
    if (updatedOrder) {
      res.status(200).json(updatedOrder);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to delete order
const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await orderModel.deleteOrder(req.params.order_id);
    if (deletedOrder) {
      res.status(200).json(deletedOrder);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//Function to add items product
const addItemsInOrder = async (req, res) => {
  try {
    const addedOrderItem = await orderModel.addItemsInOrder(
      req.params.order_id,
      req.body
    );

    if (addedOrderItem) {
      res.status(200).json(addedOrderItem);
    } else {
      res.status(404).json({ error: "Cannot add OrderItem to order" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to get order total 
const getOrderTotal = async (req,res) => {
        try {
          const OrderTotal = await orderModel.getOrderTotal(
            req.params.order_id,
          );

        if (getOrderTotal) {
          res.status(200).json(OrderTotal);
        } else {
          res.status(404).json({ error: "Order Total not found" });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};


// Export the functions
module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  addItemsInOrder,
  getOrderTotal
};
