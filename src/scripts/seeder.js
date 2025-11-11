import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "../data/products";
import Product from "../models/productModel";
import { connectDB } from "../config/db.js";

dotenv.config();

const seedProducts = async () => {
  try {
    // Connect to the database
    await connectDB();  
    // Clear existing products
    await Product.deleteMany({});
    console.log("Existing products removed");   
    // Insert sample products
    await Product.insertMany(products);
    console.log("Sample products inserted");    
    process.exit();
  } catch (error) {
    console.error(`Error seeding products: ${error.message}`);
    process.exit(1);
  } 
};



// --- Destroy Data Function (Optional but recommended) ---
const destroyData = async () => {
  try {
    await Product.deleteMany();

    console.log('Data Destroyed Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with data destruction: ${error.message}`);
    process.exit(1);
  }
};

// -- Logic to destroy seed data if '-d' flag is provided --
if (process.argv[2] === '-d') {
  destroyData(); 
} else {
  importData(); 
}
