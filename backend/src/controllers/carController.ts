import { Request, Response, NextFunction } from 'express';
import { Car } from '../models/Car';

// @desc    Get all cars with pagination and filters
// @route   GET /api/cars
// @access  Public
export const getCars = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 12;
    const skip = (page - 1) * limit;

    // Build filter object
    const filter: any = {};

    if (req.query.make) {
      filter.make = { $regex: req.query.make as string, $options: 'i' };
    }

    if (req.query.rentalPrice) {
      filter.rentalPrice = { $lte: parseInt(req.query.rentalPrice as string) };
    }

    if (req.query.minMileage) {
      filter.mileage = { ...filter.mileage, $gte: parseInt(req.query.minMileage as string) };
    }

    if (req.query.maxMileage) {
      filter.mileage = { ...filter.mileage, $lte: parseInt(req.query.maxMileage as string) };
    }

    // Execute query with pagination
    const cars = await Car.find(filter)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    // Get total count for pagination
    const totalCars = await Car.countDocuments(filter);

    res.status(200).json({
      success: true,
      cars,
      totalCars,
      currentPage: page,
      totalPages: Math.ceil(totalCars / limit),
      hasNextPage: page * limit < totalCars,
      hasPrevPage: page > 1
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single car by ID
// @route   GET /api/cars/:id
// @access  Public
export const getCarById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      res.status(404).json({
        success: false,
        error: 'Car not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: car
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all car brands
// @route   GET /api/brands
// @access  Public
export const getBrands = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const brands = await Car.distinct('make');
    
    res.status(200).json(brands);
  } catch (error) {
    next(error);
  }
};

// @desc    Create new car
// @route   POST /api/cars
// @access  Private (for admin)
export const createCar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const car = await Car.create(req.body);

    res.status(201).json({
      success: true,
      data: car
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update car
// @route   PUT /api/cars/:id
// @access  Private (for admin)
export const updateCar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!car) {
      res.status(404).json({
        success: false,
        error: 'Car not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: car
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete car
// @route   DELETE /api/cars/:id
// @access  Private (for admin)
export const deleteCar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);

    if (!car) {
      res.status(404).json({
        success: false,
        error: 'Car not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
}; 