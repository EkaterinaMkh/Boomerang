
const readline = require('readline');


// Основной файл.
// Запускает игру.
require('dotenv').config();

const Game = require('./src/Game');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});

// Запуск игры.
game.play();
