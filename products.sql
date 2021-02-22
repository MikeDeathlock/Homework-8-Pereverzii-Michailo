-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Час створення: Лют 22 2021 р., 11:11
-- Версія сервера: 10.4.17-MariaDB
-- Версія PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `online_shop`
--

-- --------------------------------------------------------

--
-- Структура таблиці `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп даних таблиці `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `image`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Ноутбук Dell Inspiron 3501', 14999, 'https://img.telemart.ua/341924-490797/dell-inspiron-3501-i3501fw34s2il-10bk-black.jpg', 'Дисплей: 15.6″ (1920x1080, TN)\r\nПроцессор: Intel Core i3-1005G1 (1.2–3.4 ГГц), 2 ядра\r\nОперативная память: 4 ГБ (DDR4)\r\nВнутренний накопитель: 256 ГБ (SSD)\r\nВидеокарта: Intel UHD Graphics', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Ноутбук Dell XPS 13', 34999, 'https://img.telemart.ua/84742-283883/dell-xps-13-x3tu78s2w-119-silver.jpg', 'Дисплей: 13.3″ (3840x2160, IPS)\r\nПроцессор: Intel Core i7-8550U (1.8–4.0 ГГц), 4 ядра\r\nОперативная память: 8 ГБ (LPDDR3)\r\nВнутренний накопитель: 256 ГБ (SSD)\r\nВидеокарта: Intel UHD Graphics 620\r\nГабариты: 302 x 199 x 11.6 мм\r\nВес: 1.2 кг', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Lenovo ThinkBook 15', 17015, 'https://img.telemart.ua/298538-465930/lenovo-thinkbook-15-20sm003sra-grey.jpg', 'Дисплей: 15.6″ (1920x1080, IPS)\r\nПроцессор: Intel Core i3-1005G1 (1.2–3.4 ГГц), 2 ядра\r\nОперативная память: 8 ГБ (DDR4)\r\nВнутренний накопитель: 256 ГБ (SSD)\r\nВидеокарта: Intel UHD Graphics', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Lenovo V15 Iron Grey', 15999, 'https://img.telemart.ua/306540-470290/lenovo-v15-82c7000yra-iron-grey.jpg', 'Дисплей: 15.6″ (1920x1080, TN)\r\nПроцессор: AMD Ryzen 5 3500U (2.1–3.7 ГГц), 4 ядра\r\nОперативная память: 8 ГБ (DDR4)\r\nВнутренний накопитель: 256 ГБ (SSD)\r\nВидеокарта: AMD Radeon Graphics', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Acer Nitro 5 AN515-54', 33735, 'https://img.telemart.ua/182924-377792/acer-nitro-5-an515-54-nhq59eu045-black.jpg', 'Дисплей: 15.6″ (1920x1080, IPS)\r\nПроцессор: Intel Core i7-9750H (2.6–4.5 ГГц), 6 ядер\r\nОперативная память: 16 ГБ (DDR4)\r\nВнутренний накопитель: 1000 + 256 ГБ (HDD + SSD)\r\nВидеокарта: NVIDIA GeForce GTX 1650\r\nГабариты: 363.4 x 255 x 25.9 мм\r\nВес: 2.5 кг', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Asus E410MA-EB009 ', 10999, 'https://img.telemart.ua/348755-495480/asus-e410ma-eb009-90nb0q11-m17950-peacock-blue.jpg', 'Дисплей: 14″ (1920x1080, IPS)\r\nПроцессор: Intel Celeron N4020 (1.1–2.8 ГГц), 2 ядра\r\nОперативная память: 4 ГБ (DDR4)\r\nВнутренний накопитель: 128 ГБ (SSD)\r\nВидеокарта: Intel UHD Graphics 600', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
