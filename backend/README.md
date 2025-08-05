# Rental Car Backend API

Backend API для додатку оренди автомобілів, створений з використанням Node.js, Express, TypeScript та MongoDB.

## Технології

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing

## Структура проєкту

```
src/
├── controllers/     # Контролери для обробки запитів
├── models/         # Mongoose моделі
├── routes/         # Express роути
├── middleware/     # Middleware функції
├── utils/          # Утиліти та допоміжні функції
├── server.ts       # Головний файл сервера
└── seed.ts         # Скрипт для наповнення БД
```

## Встановлення та налаштування

1. **Клонуйте репозиторій**
   ```bash
   git clone <repository-url>
   cd rental-car-app/backend
   ```

2. **Встановіть залежності**
   ```bash
   npm install
   ```

3. **Налаштуйте змінні середовища**
   Створіть файл `.env` в корені папки `backend`:
   ```env
   NODE_ENV=development
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/rental-car-app
   ```

4. **Запустіть MongoDB**
   Переконайтеся, що MongoDB запущена локально або використовуйте MongoDB Atlas.

5. **Наповніть базу даних тестовими даними**
   ```bash
   npm run seed
   ```

## Запуск

### Розробка
```bash
npm run dev
```

### Продакшн
```bash
npm run build
npm start
```

## API Ендпоінти

### Автомобілі

- `GET /api/cars` - Отримати список автомобілів з пагінацією та фільтрами
- `GET /api/cars/:id` - Отримати автомобіль за ID
- `GET /api/brands` - Отримати список брендів
- `POST /api/cars` - Створити новий автомобіль (адмін)
- `PUT /api/cars/:id` - Оновити автомобіль (адмін)
- `DELETE /api/cars/:id` - Видалити автомобіль (адмін)

### Бронювання

- `POST /api/bookings` - Створити нове бронювання
- `GET /api/bookings` - Отримати список бронювань (адмін)
- `GET /api/bookings/:id` - Отримати бронювання за ID (адмін)
- `PUT /api/bookings/:id` - Оновити статус бронювання (адмін)
- `DELETE /api/bookings/:id` - Видалити бронювання (адмін)

### Параметри запиту для фільтрації автомобілів

- `page` - Номер сторінки (за замовчуванням: 1)
- `limit` - Кількість елементів на сторінці (за замовчуванням: 12)
- `make` - Фільтр за брендом
- `rentalPrice` - Максимальна ціна оренди
- `minMileage` - Мінімальний пробіг
- `maxMileage` - Максимальний пробіг

### Приклад запиту
```
GET /api/cars?page=1&limit=12&make=BMW&rentalPrice=100&minMileage=10000&maxMileage=50000
```

## Моделі даних

### Car
```typescript
{
  year: number;
  make: string;
  model: string;
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
```

### Booking
```typescript
{
  carId: ObjectId;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  startDate: Date;
  endDate: Date;
  pickupLocation: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}
```

## Обробка помилок

API повертає стандартизовані JSON відповіді з помилками:

```json
{
  "success": false,
  "error": "Error message"
}
```

## Ліцензія

ISC 