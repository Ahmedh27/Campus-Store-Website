// const express = require("express");
// const router = express.Router();
const productModel = require("../Models/productModel");

// Function gets all the products
const getAllProducts = async (req, res) => {
  const { name, price, category } = req.query; //make for filtering

  let orderBy = {};
  let filter = {};

  //filtering by category
  if (category) {
    filter.category = category;
  }
  
  //sorting by name & price
  if (name) {
    orderBy = { name: name === "asc" ? "asc" : "desc" };
  }
  if (price) {
    orderBy = { price: price === "asc" ? "asc" : "desc" };
  }
  
  try {
    const products = await productModel.getAllProducts(filter, orderBy);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to get product by ID
const getProductById = async (req, res) => {
  try {
    const product = await productModel.getProductById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to create product
const createProduct = async (req, res) => {
  try {
    const newProduct = await productModel.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to update product
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productModel.updateProduct(
      req.params.id,
      req.body
    );
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to delete product
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productModel.deleteProduct(req.params.id);
    if (deletedProduct) {
      res.status(200).json(deletedProduct);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Export the functions
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
