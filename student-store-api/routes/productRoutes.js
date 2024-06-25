const express = require("express"); //Importing and Initializing Express
const router = express.Router();
const productController = require("../controllers/productController");

// get all the Products
router.get("/", productController.getAllProducts);
//get product by ID
router.get("/:id", productController.getProductById);
//add a new product
router.post("/", productController.createProduct);
//create a new product
router.put("/:id", productController.updateProduct);
//delete a product
router.delete("/:id", productController.deleteProduct);


module.exports = router;