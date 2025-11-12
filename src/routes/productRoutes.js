import express from 'express';
import Product from '../models/productModel.js';
import mongoose from 'mongoose';



const router = express.Router();

// Get All Products

router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});


// Get Product by slug
router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({ slug });
    if (!product) {
      return res.status(404).json({ message: 'Product Not Found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});


// Get Product by ID    
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid Product ID' });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product Not Found' });
    }   
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  } 
});



router.get("/category/:category", async (req, res) => {
  try {
    
    const categoryName = req.params.category;
    
    const products = await Product.find({ 
      category: { $regex: category, $options: 'i' } 
    });

    if (products.length > 0) {
      res.json(products);
    } else {
      
      res.status(404).json({ message: `No products found in category: ${categoryName}` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error: Could not fetch products by category' });
  }
});

export default router;
