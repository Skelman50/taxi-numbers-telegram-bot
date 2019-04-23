const TelegramBot = require('node-telegram-bot-api');
const fetchTaxi = require('./src/request');

const botToken = '871741900:AAHvo-RzOw_YeNToA19vuxQkwbAg_JxPum8';

const bot = new TelegramBot(botToken, { polling: true });

bot.onText(/\/start/, (msg) => {
  const text = `Hello ${msg.chat.first_name}\nВведите город где вы находитесь?`;
  bot.sendMessage(msg.chat.id, text);
});

bot.onText(/(.+)/, (ct) => {
  if (ct.text !== '/start' && ct.text.length < 20) {
    const city = ct.text.split('').filter(item => item !== '/').join('');
    fetchTaxi(bot, city, ct);
  }
});
