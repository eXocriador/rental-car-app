import { Request, Response, NextFunction } from 'express';
import { Booking } from '../models/Booking';
import { Car } from '../models/Car';

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Public
export const createBooking = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {
      carId,
      customerName,
      customerEmail,
      customerPhone,
      startDate,
      endDate,
      pickupLocation
    } = req.body;

    // Validate car exists
    const car = await Car.findById(carId);
    if (!car) {
      res.status(404).json({
        success: false,
        error: 'Car not found'
      });
      return;
    }

    // Calculate total price based on rental days
    const start = new Date(startDate);
    const end = new Date(endDate);
    const daysDiff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    const totalPrice = car.rentalPrice * daysDiff;

    // Check if car is available for the selected dates
    const conflictingBooking = await Booking.findOne({
      carId,
      status: { $in: ['pending', 'confirmed'] },
      $or: [
        {
          startDate: { $lte: end },
          endDate: { $gte: start }
        }
      ]
    });

    if (conflictingBooking) {
      res.status(400).json({
        success: false,
        error: 'Car is not available for the selected dates'
      });
      return;
    }

    // Create booking
    const booking = await Booking.create({
      carId,
      customerName,
      customerEmail,
      customerPhone,
      startDate: start,
      endDate: end,
      pickupLocation,
      totalPrice
    });

    // Populate car details
    await booking.populate('carId');

    res.status(201).json({
      success: true,
      data: booking
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Private (for admin)
export const getBookings = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const bookings = await Booking.find()
      .populate('carId')
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const totalBookings = await Booking.countDocuments();

    res.status(200).json({
      success: true,
      data: bookings,
      totalBookings,
      currentPage: page,
      totalPages: Math.ceil(totalBookings / limit)
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get booking by ID
// @route   GET /api/bookings/:id
// @access  Private (for admin)
export const getBookingById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const booking = await Booking.findById(req.params.id).populate('carId');

    if (!booking) {
      res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update booking status
// @route   PUT /api/bookings/:id
// @access  Private (for admin)
export const updateBooking = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    ).populate('carId');

    if (!booking) {
      res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete booking
// @route   DELETE /api/bookings/:id
// @access  Private (for admin)
export const deleteBooking = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      res.status(404).json({
        success: false,
        error: 'Booking not found'
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