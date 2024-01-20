import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
const port = process.env.PORT || 3333;

connectDB(); //Connect to MongoDB

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

//^ Whenever you go to /api/products/ it will send you to the productRoutes file
app.use('/api/products', productRoutes);

app.use(notFound); 
app.use(errorHandler);



app.listen(port, () => console.log(`Server is running on port ${port}`));
