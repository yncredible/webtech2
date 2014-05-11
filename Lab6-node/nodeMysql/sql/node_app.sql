-- phpMyAdmin SQL Dump
-- version 3.5.7
-- http://www.phpmyadmin.net
--
-- Machine: localhost
-- Genereertijd: 11 mei 2014 om 22:01
-- Serverversie: 5.5.29
-- PHP-versie: 5.4.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databank: `node_app`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Gegevens worden uitgevoerd voor tabel `products`
--

INSERT INTO `products` (`id`, `name`) VALUES
(1, 'iphone'),
(2, 'iMac'),
(3, 'Macbook Pro'),
(4, 'iPad Air'),
(5, 'Macbook Air'),
(6, 'iPod Nano'),
(7, 'iPod Classic'),
(8, 'iPod Touch'),
(9, 'iPhone 5s'),
(10, 'Led dislay'),
(11, 'Mama mia'),
(12, 'Jens Ivens Te koop'),
(13, 'Yannickkkk'),
(14, 'Pommm'),
(15, 'Yannick'),
(16, 'isss'),
(17, 'Jenske ivens');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
