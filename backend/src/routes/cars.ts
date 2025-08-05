import express from 'express';
import {
  getCars,
  getCarById,
  getBrands,
  createCar,
  updateCar,
  deleteCar
} from '../controllers/carController';

const router = express.Router();

// Public routes
router.get('/', getCars);
router.get('/brands', getBrands);
router.get('/:id', getCarById);

// Admin routes (for future use with authentication)
router.post('/', createCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

export default router; 