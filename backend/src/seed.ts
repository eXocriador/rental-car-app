import { connectDB, disconnectDB } from './utils/database';
import { Car } from './models/Car';

const carsData = [
  {
    year: 2020,
    make: 'Buick',
    model: 'Enclave',
    type: 'SUV',
    img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Luxury SUV with premium features and comfortable interior',
    fuelConsumption: '8.5L/100km',
    engineSize: '3.6L V6',
    accessories: ['Leather Seats', 'Navigation System', 'Bluetooth', 'Backup Camera'],
    functionalities: ['All-Wheel Drive', 'Cruise Control', 'Climate Control', 'Power Windows'],
    rentalPrice: 50,
    rentalCompany: 'Premium Rentals',
    address: '123 Main St, Downtown',
    rentalConditions: 'Minimum 1 day rental, valid driver license required',
    mileage: 15000
  },
  {
    year: 2019,
    make: 'Volvo',
    model: 'XC90',
    type: 'SUV',
    img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Safe and reliable family SUV with advanced safety features',
    fuelConsumption: '7.2L/100km',
    engineSize: '2.0L Turbo',
    accessories: ['Safety Package', 'Premium Audio', 'Heated Seats', 'Panoramic Roof'],
    functionalities: ['Lane Assist', 'Blind Spot Monitor', 'Emergency Brake', 'Adaptive Cruise'],
    rentalPrice: 65,
    rentalCompany: 'SafeDrive Rentals',
    address: '456 Oak Ave, Midtown',
    rentalConditions: 'Minimum 2 days rental, insurance required',
    mileage: 22000
  },
  {
    year: 2021,
    make: 'Honda',
    model: 'CR-V',
    type: 'SUV',
    img: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Compact SUV perfect for city driving and weekend trips',
    fuelConsumption: '6.8L/100km',
    engineSize: '1.5L Turbo',
    accessories: ['Apple CarPlay', 'Android Auto', 'USB Ports', 'Cargo Cover'],
    functionalities: ['Eco Mode', 'Sport Mode', 'Hill Start Assist', 'Traction Control'],
    rentalPrice: 45,
    rentalCompany: 'City Rentals',
    address: '789 Pine St, Uptown',
    rentalConditions: 'Minimum 1 day rental, credit card required',
    mileage: 12000
  },
  {
    year: 2022,
    make: 'Toyota',
    model: 'Camry',
    type: 'Sedan',
    img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Reliable sedan with excellent fuel economy and comfort',
    fuelConsumption: '5.5L/100km',
    engineSize: '2.5L I4',
    accessories: ['Toyota Safety Sense', 'Entune Audio', 'Smart Key', 'Dual Zone Climate'],
    functionalities: ['Pre-Collision System', 'Lane Departure Alert', 'Adaptive Cruise Control', 'Auto High Beams'],
    rentalPrice: 40,
    rentalCompany: 'Reliable Rentals',
    address: '321 Elm St, Downtown',
    rentalConditions: 'Minimum 1 day rental, valid ID required',
    mileage: 8000
  },
  {
    year: 2020,
    make: 'BMW',
    model: 'X5',
    type: 'SUV',
    img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Luxury performance SUV with cutting-edge technology',
    fuelConsumption: '9.2L/100km',
    engineSize: '3.0L Twin-Turbo',
    accessories: ['BMW Live Cockpit', 'Harman Kardon Audio', 'Panoramic Roof', 'Sport Package'],
    functionalities: ['xDrive AWD', 'Dynamic Damper Control', 'Adaptive M Suspension', 'Driving Assistant Professional'],
    rentalPrice: 85,
    rentalCompany: 'Luxury Rentals',
    address: '654 Luxury Blvd, High End District',
    rentalConditions: 'Minimum 3 days rental, premium insurance required',
    mileage: 18000
  },
  {
    year: 2021,
    make: 'Audi',
    model: 'A4',
    type: 'Sedan',
    img: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Premium sedan with quattro all-wheel drive and sophisticated design',
    fuelConsumption: '6.1L/100km',
    engineSize: '2.0L Turbo',
    accessories: ['Virtual Cockpit', 'Bang & Olufsen Audio', 'Audi Pre Sense', 'Matrix LED Headlights'],
    functionalities: ['quattro AWD', 'Audi Drive Select', 'Adaptive Cruise Control', 'Lane Assist'],
    rentalPrice: 70,
    rentalCompany: 'Premium Rentals',
    address: '987 Premium Ave, Luxury District',
    rentalConditions: 'Minimum 2 days rental, comprehensive insurance required',
    mileage: 15000
  },
  {
    year: 2019,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    type: 'Sedan',
    img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Elegant luxury sedan with advanced driver assistance systems',
    fuelConsumption: '6.8L/100km',
    engineSize: '2.0L Turbo',
    accessories: ['MBUX Infotainment', 'Burmester Audio', 'AMG Line Package', 'Panoramic Roof'],
    functionalities: ['Distronic Plus', 'Active Lane Keeping Assist', 'Active Blind Spot Assist', 'Pre-Safe Plus'],
    rentalPrice: 75,
    rentalCompany: 'Mercedes Rentals',
    address: '147 Mercedes Way, Luxury District',
    rentalConditions: 'Minimum 2 days rental, premium insurance required',
    mileage: 25000
  },
  {
    year: 2022,
    make: 'Tesla',
    model: 'Model 3',
    type: 'Electric',
    img: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Electric vehicle with autopilot and over-the-air updates',
    fuelConsumption: '0L/100km (Electric)',
    engineSize: 'Dual Motor AWD',
    accessories: ['Autopilot', 'Premium Interior', 'Glass Roof', 'Wireless Phone Charging'],
    functionalities: ['Autopilot', 'Summon', 'Dog Mode', 'Camp Mode'],
    rentalPrice: 90,
    rentalCompany: 'Electric Rentals',
    address: '258 Electric Ave, Green District',
    rentalConditions: 'Minimum 1 day rental, charging station access included',
    mileage: 5000
  },
  {
    year: 2020,
    make: 'Ford',
    model: 'Mustang',
    type: 'Sports Car',
    img: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Iconic American muscle car with powerful performance',
    fuelConsumption: '12.5L/100km',
    engineSize: '5.0L V8',
    accessories: ['SYNC 3 Infotainment', 'Shaker Audio', 'Recaro Seats', 'Track Package'],
    functionalities: ['Launch Control', 'Line Lock', 'Track Apps', 'MyMode'],
    rentalPrice: 95,
    rentalCompany: 'Muscle Rentals',
    address: '369 Muscle St, Performance District',
    rentalConditions: 'Minimum 1 day rental, performance driving experience required',
    mileage: 12000
  },
  {
    year: 2021,
    make: 'Porsche',
    model: '911',
    type: 'Sports Car',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Legendary sports car with precision engineering and performance',
    fuelConsumption: '11.8L/100km',
    engineSize: '3.0L Twin-Turbo',
    accessories: ['Porsche Communication Management', 'Bose Audio', 'Sport Chrono Package', 'Carbon Fiber Interior'],
    functionalities: ['Launch Control', 'Sport Plus Mode', 'PASM Suspension', 'Porsche Torque Vectoring'],
    rentalPrice: 150,
    rentalCompany: 'Porsche Rentals',
    address: '741 Porsche Blvd, Performance District',
    rentalConditions: 'Minimum 1 day rental, sports car experience required',
    mileage: 8000
  },
  {
    year: 2022,
    make: 'Jeep',
    model: 'Wrangler',
    type: 'Off-Road',
    img: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Legendary off-road vehicle with removable top and doors',
    fuelConsumption: '10.2L/100km',
    engineSize: '2.0L Turbo',
    accessories: ['Uconnect Infotainment', 'Alpine Audio', 'Hard Top', 'Off-Road Package'],
    functionalities: ['Command-Trac 4WD', 'Rock-Trac 4WD', 'Sway Bar Disconnect', 'Tru-Lok Locking Differentials'],
    rentalPrice: 60,
    rentalCompany: 'Adventure Rentals',
    address: '852 Adventure Trail, Outdoor District',
    rentalConditions: 'Minimum 1 day rental, off-road experience recommended',
    mileage: 10000
  },
  {
    year: 2020,
    make: 'Lexus',
    model: 'RX',
    type: 'SUV',
    img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Luxury SUV with hybrid technology and exceptional reliability',
    fuelConsumption: '6.2L/100km (Hybrid)',
    engineSize: '2.5L Hybrid',
    accessories: ['Lexus Enform', 'Mark Levinson Audio', 'Panoramic Roof', 'Safety System+'],
    functionalities: ['Hybrid Drive', 'Eco Mode', 'Pre-Collision System', 'Lane Departure Alert'],
    rentalPrice: 80,
    rentalCompany: 'Luxury Rentals',
    address: '963 Luxury Lane, Premium District',
    rentalConditions: 'Minimum 2 days rental, comprehensive insurance required',
    mileage: 18000
  }
];

const seedDatabase = async () => {
  try {
    console.log('Connecting to database...');
    await connectDB();

    console.log('Clearing existing cars...');
    await Car.deleteMany({});

    console.log('Seeding cars data...');
    const cars = await Car.insertMany(carsData);

    console.log(`Successfully seeded ${cars.length} cars`);
    
    // Display some sample data
    console.log('\nSample cars:');
    cars.slice(0, 3).forEach(car => {
      console.log(`- ${car.year} ${car.make} ${car.model} ($${car.rentalPrice}/day)`);
    });

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await disconnectDB();
    process.exit(0);
  }
};

// Run the seed function
seedDatabase(); 