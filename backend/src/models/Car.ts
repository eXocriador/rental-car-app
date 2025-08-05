import { Schema, model, Document } from "mongoose";

export interface ICar extends Document {
  year: number;
  brand: string;
  carModel: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: number;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
}

const carSchema = new Schema<ICar>(
  {
    year: {
      type: Number,
      required: true,
      min: 1900,
      max: new Date().getFullYear() + 1
    },
    brand: {
      type: String,
      required: true,
      trim: true
    },
    carModel: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      required: true,
      trim: true
    },
    img: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    fuelConsumption: {
      type: String,
      required: true,
      trim: true
    },
    engineSize: {
      type: String,
      required: true,
      trim: true
    },
    accessories: [
      {
        type: String,
        trim: true
      }
    ],
    functionalities: [
      {
        type: String,
        trim: true
      }
    ],
    rentalPrice: {
      type: Number,
      required: true,
      min: 0
    },
    rentalCompany: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      required: true,
      trim: true
    },
    rentalConditions: {
      type: String,
      required: true,
      trim: true
    },
    mileage: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete (ret as any)._id;
        delete (ret as any).__v;
        return ret;
      }
    }
  }
);

// Create indexes for better query performance
carSchema.index({ brand: 1 });
carSchema.index({ rentalPrice: 1 });
carSchema.index({ mileage: 1 });
carSchema.index({ brand: 1, rentalPrice: 1, mileage: 1 });

export const Car = model<ICar>("Car", carSchema);
