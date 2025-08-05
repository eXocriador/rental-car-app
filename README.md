# RentalCar - Car Rental Web Application

A modern React-based web application for browsing and managing car rentals. Built with Vite, Redux Toolkit, and styled-components.

## 🚀 Live Demo

[Deploy to Vercel/Netlify and add link here]

## ✨ Key Features

- **Advanced Filtering**: Filter cars by brand, price range, and mileage
- **Pagination**: Load more cars with infinite scroll functionality
- **Favorites System**: Save and manage your favorite cars with persistent storage
- **Responsive Design**: Modern UI that works on all devices
- **Real-time Search**: Instant filtering and search capabilities

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **State Management**: Redux Toolkit, Redux Persist
- **Styling**: Styled Components
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast

## 📦 Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd rental-car-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Project Structure

```
src/
├── api/              # API configuration
├── assets/           # Images and icons
├── components/       # Reusable UI components
├── pages/           # Page components
├── redux/           # State management
├── utils/           # Utility functions
└── main.jsx         # Application entry point
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages

- **Home** (`/`) - Landing page with hero section
- **Catalog** (`/catalog`) - Browse and filter cars
- **Favorites** (`/favorites`) - View saved cars

## 🔧 API Integration

The application integrates with the Car Rental API:

- Base URL: `https://car-rental-api.goit.global`
- Endpoints: `/adverts`, `/adverts/makes`
- Features: Pagination, filtering, brand fetching

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
