# Налаштування Rental Car App

## Крок 1: Встановлення MongoDB

### Варіант 1: Локальна MongoDB

1. **macOS (з Homebrew):**
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   brew services start mongodb/brew/mongodb-community
   ```

2. **Windows:**
   - Завантажте MongoDB з [офіційного сайту](https://www.mongodb.com/try/download/community)
   - Встановіть та запустіть MongoDB як службу

3. **Linux (Ubuntu):**
   ```bash
   sudo apt update
   sudo apt install mongodb
   sudo systemctl start mongodb
   sudo systemctl enable mongodb
   ```

### Варіант 2: MongoDB Atlas (хмарна база)

1. Зареєструйтесь на [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Створіть кластер
3. Отримайте рядок підключення
4. Замініть `MONGO_URI` в `.env` файлі

## Крок 2: Налаштування змінних середовища

Створіть файл `.env` в папці `backend`:

```env
NODE_ENV=development
PORT=4000
MONGO_URI=mongodb://localhost:27017/rental-car-app
```

Для MongoDB Atlas використовуйте:
```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/rental-car-app?retryWrites=true&w=majority
```

## Крок 3: Встановлення залежностей

```bash
# Встановлення всіх залежностей
npm run install:all
```

## Крок 4: Наповнення бази даних

```bash
# Запуск скрипта наповнення
npm run seed
```

## Крок 5: Запуск проєкту

### Розробка (паралельний запуск фронтенду та бекенду)
```bash
npm run dev
```

### Окремі запуски
```bash
# Тільки бекенд
npm run dev:backend

# Тільки фронтенд
npm run dev:frontend
```

## Перевірка роботи

1. **Бекенд API:** http://localhost:4000/api/health
2. **Фронтенд:** http://localhost:5173
3. **API документація:** http://localhost:4000/api/cars

## Структура бази даних

Після запуску `npm run seed` в базі даних будуть створені:

- **Колекція `cars`** - 13 автомобілів різних брендів
- **Колекція `bookings`** - порожня (для майбутніх бронювань)

## Вирішення проблем

### Помилка підключення до MongoDB
```bash
# Перевірте статус MongoDB
brew services list | grep mongodb

# Або для Linux
sudo systemctl status mongodb
```

### Помилка порту
Якщо порт 4000 зайнятий, змініть `PORT` в `.env` файлі.

### Помилка CORS
Переконайтеся, що фронтенд запущений на порту 5173, а бекенд на порту 4000.

## Корисні команди

```bash
# Очищення бази даних
cd backend
npm run seed

# Перегляд логів
cd backend
npm run dev

# Тестування API
curl http://localhost:4000/api/health
curl http://localhost:4000/api/cars
curl http://localhost:4000/api/brands
``` 