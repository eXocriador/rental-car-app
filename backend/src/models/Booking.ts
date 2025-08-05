import { Schema, model, Document, Types } from 'mongoose';

export interface IBooking extends Document {
  carId: Types.ObjectId;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  startDate: Date;
  endDate: Date;
  pickupLocation: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

const bookingSchema = new Schema<IBooking>({
  carId: {
    type: Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  customerName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100
  },
  customerEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  customerPhone: {
    type: String,
    required: true,
    trim: true,
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
  },
  startDate: {
    type: Date,
    required: true,
    min: new Date()
  },
  endDate: {
    type: Date,
    required: true,
    validate: {
      validator: function(this: IBooking, value: Date) {
        return value > this.startDate;
      },
      message: 'End date must be after start date'
    }
  },
  pickupLocation: {
    type: String,
    required: true,
    trim: true
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

// Create indexes
bookingSchema.index({ carId: 1 });
bookingSchema.index({ customerEmail: 1 });
bookingSchema.index({ startDate: 1, endDate: 1 });
bookingSchema.index({ status: 1 });

export const Booking = model<IBooking>('Booking', bookingSchema); 