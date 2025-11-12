import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoutes.js';




const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/api/products', productRoutes);




// Connect to Database
connectDB();

// Sample Route
app.get('/', (req, res) => {
  res.send('Welcome to Shop99 E-Commerce API');
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
