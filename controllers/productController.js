const Product = require('../models/Product');


// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message:"Get all products",
      data:users
    })
  } catch (error) {
    res.status(500).json({  
      message:"Get products failed",
      data:error
    })
  }
};

// Save a product
const saveProduct = async (req, res) => {
  try {
    const product = new Product (req.body);
    const savedProduct = await User.save();
    
    req.status(201).json({
      message: "Product saved succesfully",
      data: savedProduct
    })
  } catch (error) {
    res.status(500).json({
      message: "Failed to save products",
      data: error
    });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const productId = req.params.id
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId,{
      new: true
    })

    res.status(200).json ({
      message: "Update product success",
      data: updatedProduct
    })
  } catch (error) {
    res.status(500).json ({
      message: "Update product failed",
      data: error
    })
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndRemove(productId);
    res.status(200).json({
      message: "Delete product success",
      data: deletedProduct
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete product",
      error: error
    });
  }
};

module.exports = {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}