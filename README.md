# Rental Car App - Fullstack Monorepo

Повноцінний фуллстек додаток для оренди автомобілів з використанням React + TypeScript на фронтенді та Node.js + Express + MongoDB на бекенді.

## 🏗️ Структура проєкту

```
rental-car-app/
├── frontend/          # React + TypeScript фронтенд
│   ├── src/
│   │   ├── components/    # React компоненти
│   │   ├── pages/         # Сторінки додатку
│   │   ├── redux/         # Redux store та slices
│   │   ├── api/           # API конфігурація
│   │   ├── types/         # TypeScript типи
│   │   └── utils/         # Утиліти
│   └── package.json
├── backend/           # Node.js + Express + MongoDB бекенд
│   ├── src/
│   │   ├── controllers/   # Контролери API
│   │   ├── models/        # Mongoose моделі
│   │   ├── routes/        # Express роути
│   │   ├── middleware/    # Middleware функції
│   │   └── utils/         # Утиліти
│   └── package.json
└── README.md
```

## 🚀 Швидкий старт

### Передумови

- Node.js (версія 16 або вище)
- MongoDB (локально або MongoDB Atlas)
- npm або yarn

### Встановлення

1. **Клонуйте репозиторій**

   ```bash
   git clone <repository-url>
   cd rental-car-app
   ```

2. **Встановіть залежності для бекенду**

   ```bash
   cd backend
   npm install
   ```

3. **Встановіть залежності для фронтенду**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Налаштуйте змінні середовища**

   Створіть файл `.env` в папці `backend`:

   ```env
   NODE_ENV=development
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/rental-car-app
   ```

5. **Наповніть базу даних тестовими даними**
   ```bash
   cd backend
   npm run seed
   ```

### Запуск

#### Розробка

1. **Запустіть бекенд**

   ```bash
   cd backend
   npm run dev
   ```

2. **Запустіть фронтенд** (в новому терміналі)
   ```bash
   cd frontend
   npm run dev
   ```

#### Продакшн

1. **Зберіть бекенд**

   ```bash
   cd backend
   npm run build
   npm start
   ```

2. **Зберіть фронтенд**
   ```bash
   cd frontend
   npm run build
   ```

## 🛠️ Технології

### Frontend

- **React 18** - UI бібліотека
- **TypeScript** - Type-safe JavaScript
- **Redux Toolkit** - State management
- **React Router** - Навігація
- **CSS Modules** - Стилізація
- **Vite** - Build tool

### Backend

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing

## 📱 Функціональність

### Для користувачів

- ✅ Перегляд каталогу автомобілів
- ✅ Фільтрація за брендом, ціною та пробігом
- ✅ Детальна інформація про автомобіль
- ✅ Система улюблених автомобілів
- ✅ Форма бронювання автомобіля
- ✅ Адаптивний дизайн

### Для адміністраторів

- ✅ Управління каталогом автомобілів
- ✅ Перегляд та управління бронюваннями
- ✅ Статистика та аналітика

## 🔧 API Ендпоінти

### Автомобілі

- `GET /api/cars` - Список автомобілів з пагінацією та фільтрами
- `GET /api/cars/:id` - Деталі автомобіля
- `GET /api/brands` - Список брендів
- `POST /api/cars` - Створення автомобіля (адмін)
- `PUT /api/cars/:id` - Оновлення автомобіля (адмін)
- `DELETE /api/cars/:id` - Видалення автомобіля (адмін)

### Бронювання

- `POST /api/bookings` - Створення бронювання
- `GET /api/bookings` - Список бронювань (адмін)
- `GET /api/bookings/:id` - Деталі бронювання (адмін)
- `PUT /api/bookings/:id` - Оновлення статусу (адмін)
- `DELETE /api/bookings/:id` - Видалення бронювання (адмін)

## 📊 База даних

### Модель Car

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

### Модель Booking

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
  status: "pending" | "confirmed" | "cancelled" | "completed";
}
```

## 🎨 UI/UX Особливості

- **Сучасний дизайн** - Використання сучасних принципів дизайну
- **Адаптивність** - Повна підтримка мобільних пристроїв
- **Швидкість** - Оптимізована продуктивність
- **Доступність** - Підтримка стандартів доступності
- **UX** - Інтуїтивний користувацький інтерфейс

## 🔒 Безпека

- **Валідація даних** - Перевірка вхідних даних
- **CORS** - Налаштування Cross-Origin Resource Sharing
- **Обробка помилок** - Централізована обробка помилок
- **Безпечні заголовки** - Налаштування безпечних заголовків

## 🧪 Тестування

```bash
# Frontend тести
cd frontend
npm test

# Backend тести
cd backend
npm test
```

## 📦 Розгортання

### Docker (майбутнє)

```bash
docker-compose up -d
```

### Vercel (Frontend)

```bash
cd frontend
vercel --prod
```

### Railway/Heroku (Backend)

```bash
cd backend
# Налаштуйте змінні середовища
git push heroku main
```

## 🤝 Внесок

1. Fork проєкт
2. Створіть feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit зміни (`git commit -m 'Add some AmazingFeature'`)
4. Push до branch (`git push origin feature/AmazingFeature`)
5. Відкрийте Pull Request

## 📄 Ліцензія

Цей проєкт ліцензований під MIT License - дивіться файл [LICENSE](LICENSE) для деталей.

## 👥 Автори

- **Розробник** - [Ваше ім'я](https://github.com/yourusername)

## 🙏 Подяки

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [TypeScript](https://www.typescriptlang.org/)
