// const express = require("express");
// const { createProduct } = require("../controllers/productController");

// const router = express.Router();

// router.route("/new").post(createProduct); // Define the route for creating a new product

// module.exports = router;


const express = require("express");
const { createProduct } = require("../controllers/productController");

const router = express.Router();

router.route("/new").post(createProduct); // Define the route for creating a new product

module.exports = router;

