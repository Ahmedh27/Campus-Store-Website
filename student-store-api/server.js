const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = 3000;

// Enable CORS middleware to handle cross-origin requests
app.use(cors());

// Use morgan for logging requests
app.use(morgan("dev"));

// Middleware to parse JSON request bodies
app.use(express.json());

//base route
app.get("/", (req, res) => {
  res.send("Hello from the backend -- You are currently at the / route");
});

// Product routes
app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// //creating a specfic ID of a products
// app.post("/products", (req, res) => {
//   const { id, name, description, price, image_url, category } = req.body;

//   const newProduct = {
//     id,
//     name,
//     description,
//     price,
//     image_url,
//     category,
//   };
//   console.log("post test");
// });

// ///using .put() to completely replace a product
// app.put("/products", (req, res) => {
//   const { petId: productId } = req.params;
//   const productIndex = products.findIndex(
//     (product) => products.id === parseInt(productId)
//   );

//   if (productIndex !== -1) {
//     const updatedPetInfo = req.body;
//     products[productIndex] = { ...pets[productIndex], ...updatedPetInfo };
//     res.json(products[productIndex]);
//   } else {
//     res.status(404).send("Pet not found");
//   }
// });

// //deleting products
// app.delete("/products/:productId", (req, res) => {
//   const { petId } = req.params;
//   const initialLength = pets.length;
//   pets = pets.filter((pet) => pet.id !== parseInt(petId));

//   if (pets.length < initialLength) {
//     res.status(204).send();
//   } else {
//     res.status(404).send("Contact not found");
//   }
// });

// //   app.get("/cars", (req,res) => {
// //     let filteredCars =cars;
// //     const {make} = req.query;//correctly destructing
// //     console.log(query.make);
// //     //checking if the query has a same make
// //     if(req.query.make) {
// //         console.log(req.query.make);
// //         //filter the cars using the .filter() method
// //         filteredCars = filteredCars.filter((car) => car.make.toLowerCase()
// //     )};

// //     //checking if the query has a same make
// //     if(req.query.year) {
// //         console.log(req.query.year);
// //         //filter the cars using the .filter() method
// //         filteredCars = filteredCars.filter((car) => car.year.toLowerCase() === parseInt(year)
// //     )};

// app.listen(port, () => {
//   console.log(`server is running on http://localhost:${port}`);
// });
