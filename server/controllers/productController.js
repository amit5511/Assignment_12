// const Product = require("../models/product-model");

// // Create Product -- Admin
// exports.createProduct = async (req, res, next) => {
//   try {
//     const product = await Product.create(req.body);

//     res.status(201).json({
//       success: true,
//       product,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: "Internal Server Error",
//     });
//   }
// };

// const Product = require("../models/product-model");

// // Create Product -- Admin
// exports.createProduct = async (req, res, next) => { // Removed catchAsyncErrors
//   try {
//     const product = await Product.create(req.body);

//     res.status(201).json({
//       success: true,
//       product,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: "Internal Server Error",
//     });
//   }
// };

const Product = require("../models/product-model");

// Create Product -- Admin
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};


