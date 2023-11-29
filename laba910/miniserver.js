const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Разрешаем парсинг JSON-данных
app.use(bodyParser.json());

// Разрешаем CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

// Обработка POST-запроса на /submitForm
app.post('/submitForm', (req, res) => {
    const formData = req.body;
    console.log('Получены данные формы:', formData);

    // Отправляем успешный ответ клиенту
    res.json({ success: true });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});