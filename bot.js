`bot.js`
javascript
const TelegramBot = require('node-telegram-bot-api');

// Вставьте сюда ваш токен, который вы получили от BotFather
const token = '7728628249:AAGWcOgnHZGSnXOzO0uGfrVCLUwKKHATKNY';

// Создаем бота
const bot = new TelegramBot(token, {polling: true});

// Обработчик команды /hello
bot.onText(/\/hello/, (msg) => {
  const chatId = msg.chat.id;
  const username = msg.from.username || 'пользователь';

  const response = `Привет, ${username}!`;

  bot.sendMessage(chatId, response);
});

// Логирование запуска бота
console.log('Бот запущен...');
