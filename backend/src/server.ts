import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './utils/database';
import { errorHandler, notFound } from './middleware/errorHandler';
import carRoutes from './routes/cars';
import bookingRoutes from './routes/bookings';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/cars', carRoutes);
app.use('/api/bookings', bookingRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Rental Car API is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error) => {
  console.log('Unhandled Rejection:', err.message);
  // Close server & exit process
  process.exit(1);
}); 