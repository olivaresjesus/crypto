-- phpMyAdmin SQL Dump
-- version 4.0.10.18
-- https://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Apr 12, 2018 at 03:33 PM
-- Server version: 5.6.39-cll-lve
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cryptocoin`
--

-- --------------------------------------------------------

--
-- Table structure for table `criptomonedas`
--

CREATE TABLE IF NOT EXISTS `criptomonedas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `criptomoneda` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT AUTO_INCREMENT=12 ;

--
-- Dumping data for table `criptomonedas`
--

INSERT INTO `criptomonedas` (`id`, `criptomoneda`) VALUES
(1, 'Bitcoin'),
(2, 'Etherium'),
(3, 'Litecoin'),
(4, 'Dogecoin'),
(5, 'Bytecoin'),
(6, 'Verge'),
(7, 'Ripple'),
(8, 'Stellar'),
(9, 'Euro'),
(10, 'GBP'),
(11, 'USD');

-- --------------------------------------------------------

--
-- Table structure for table `monto_actual`
--

CREATE TABLE IF NOT EXISTS `monto_actual` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_criptomoneda` float NOT NULL,
  `id_usuario` int(3) NOT NULL,
  `inversion` double(20,10) NOT NULL,
  `fecha` date NOT NULL,
  `fecha_reg` date NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `banco` double(20,10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=68 ;

--
-- Dumping data for table `monto_actual`
--

INSERT INTO `monto_actual` (`id`, `id_criptomoneda`, `id_usuario`, `inversion`, `fecha`, `fecha_reg`, `activo`, `banco`) VALUES
(1, 1, 9, 11.0000000000, '2018-01-17', '0000-00-00', 0, 0.0000000000),
(2, 1, 9, 11.0000000000, '2018-01-17', '1992-10-10', 0, 0.0000000000),
(3, 5, 11, 222.0000000000, '2018-01-21', '2000-10-10', 1, 0.0000000000),
(4, 2, 11, 222.0000000000, '2018-01-21', '2000-10-10', 0, 0.0000000000),
(5, 1, 11, 222.0000000000, '2018-01-21', '2000-10-10', 0, 0.0000000000),
(6, 2, 9, 111.0000000000, '2018-01-21', '2001-01-01', 0, 111.0000000000),
(7, 8, 11, 777.0000000000, '2018-01-21', '2022-10-10', 0, 777.0000000000),
(8, 8, 11, 777.0000000000, '2018-01-21', '2022-10-10', 1, 777.0000000000),
(9, 2, 11, 777.0100097656, '2018-01-22', '2022-10-10', 1, 777.0100097656),
(10, 1, 31, 25.2525253296, '2018-02-03', '2018-01-31', 0, 35.3530006409),
(11, 1, 31, 25.2525250000, '2018-02-03', '2018-01-31', 0, 35.3530000000),
(12, 2, 31, 25.2525250000, '2018-02-03', '2018-01-31', 0, 35.3530000000),
(13, 3, 31, 25.2525250000, '2018-02-03', '2018-01-31', 0, 35.3530000000),
(14, 6, 31, 12.2220000000, '2018-01-22', '2018-02-03', 0, 36.3636369900),
(15, 1, 9, 100.0000000000, '0000-00-00', '2018-02-03', 0, 1.0000000000),
(16, 3, 32, 20.8900000000, '0000-00-00', '2018-02-05', 0, 20.8000000000),
(17, 8, 32, 50.0000000000, '0000-00-00', '2018-02-05', 1, 51.2000000000),
(18, 3, 32, 54.0000000000, '2018-05-01', '2018-02-05', 1, 54.0000000000),
(19, 1, 9, 1.0000000000, '2018-02-20', '2018-02-05', 0, 1.0000000000),
(20, 1, 9, 1.0000000000, '2018-02-20', '2018-02-05', 0, 1.0000000000),
(21, 1, 9, 1.1000000000, '2018-02-20', '2018-02-05', 1, 1.0000000000),
(22, 2, 9, 123.0000000000, '2018-02-14', '2018-02-05', 1, 123.0000000000),
(23, 1, 30, 1.0000000000, '2018-04-24', '2018-02-05', 1, 2.0000000000),
(24, 7, 33, 400.0000000000, '2018-05-01', '2018-02-06', 1, 400.0000000000),
(25, 7, 34, 400.0000000000, '2018-05-10', '2018-02-06', 1, 100.0000000000),
(26, 1, 35, 0.0000000000, '2018-06-06', '2018-02-23', 0, 10.0000000000),
(27, 1, 35, 0.0000000000, '2018-02-22', '2018-02-23', 1, 10.0000000000),
(28, 7, 35, 0.0000000000, '2018-05-22', '2018-02-23', 0, 400.0000000000),
(29, 7, 35, 0.0000000000, '2018-02-22', '2018-02-23', 1, 400.0000000000),
(30, 8, 35, 0.0000000000, '2018-02-22', '2018-02-23', 0, 400.0000000000),
(31, 8, 35, 0.0000000000, '2018-02-22', '2018-02-23', 0, 400.0000000000),
(32, 8, 35, 0.0000000000, '2018-02-22', '2018-02-23', 1, 400.0000000000),
(33, 1, 31, 1.0000000000, '2018-02-27', '2018-02-27', 0, 60.0000000000),
(34, 1, 31, 153.0000000000, '2018-03-07', '2018-03-07', 0, 0.0000000000),
(35, 11, 9, 555.0000000000, '2018-03-08', '2018-03-07', 1, 555.0000000000),
(36, 11, 21, 555.0000000000, '2018-03-05', '2018-03-07', 1, 555.0000000000),
(37, 10, 21, 2222.0000000000, '2018-03-30', '2018-03-07', 1, 0.0000000000),
(38, 8, 21, 333.0000000000, '2018-03-05', '2018-03-07', 1, 0.0000000000),
(39, 1, 31, 9.0000000000, '2018-03-08', '2018-03-07', 0, 0.0000000000),
(40, 1, 31, 0.0000000000, '2018-03-08', '2018-03-07', 0, 0.0000000000),
(41, 4, 31, 0.0000000000, '2018-06-06', '2018-03-07', 1, 0.0000000000),
(42, 5, 21, 1111.0000000000, '2018-03-01', '2018-03-07', 0, 0.0000000000),
(43, 5, 21, 0.0000000000, '2018-03-12', '2018-03-07', 0, 0.0000000000),
(44, 5, 21, 0.0000000000, '2018-03-05', '2018-03-07', 0, 2222.0000000000),
(45, 5, 21, 2222.0000000000, '2018-03-11', '2018-03-07', 1, 0.0000000000),
(46, 8, 31, 0.0000000000, '2018-05-29', '2018-03-07', 1, 9.0000000000),
(47, 6, 31, 9.0000000000, '2018-06-26', '2018-03-07', 0, 0.0000000000),
(48, 1, 31, 0.0000000000, '2018-03-08', '2018-03-08', 0, 1.0000000000),
(49, 2, 31, 0.0000000000, '2018-03-08', '2018-03-08', 1, 0.0000000000),
(50, 9, 31, 0.0000000000, '2018-03-08', '2018-03-08', 0, 0.0000000000),
(51, 3, 31, 0.0000000000, '2018-03-08', '2018-03-08', 1, 0.0000000000),
(52, 6, 31, 0.0000000000, '2018-03-08', '2018-03-08', 1, 0.0000000000),
(53, 9, 31, 10.0000000000, '2018-03-08', '2018-03-08', 1, 0.0000000000),
(54, 1, 31, 10.0000000000, '2018-05-23', '2018-03-08', 1, 10.0000000000),
(55, 1, 38, 0.0000000000, '2018-03-21', '2018-03-21', 0, 22.0000000000),
(56, 1, 38, 0.0000000000, '2018-03-21', '2018-03-21', 1, 22.2410000000),
(57, 9, 38, 22.1000000000, '2018-03-21', '2018-03-21', 0, 0.0000000000),
(58, 9, 38, 0.0000000000, '2018-03-21', '2018-03-21', 0, 55.0000000000),
(59, 9, 38, 55.0000000000, '2018-03-21', '2018-03-21', 0, 0.0000000000),
(60, 9, 38, 555.0000000000, '2018-03-21', '2018-03-21', 1, 0.0000000000),
(61, 11, 38, 555.0000000000, '2018-03-21', '2018-03-21', 1, 0.0000000000),
(62, 1, 40, 0.0000000000, '2018-03-23', '2018-03-23', 1, 26.0000000000),
(63, 9, 40, 0.0000000000, '2018-03-23', '2018-03-23', 1, 10000.0000000000),
(64, 1, 11, 1.0000000000, '2018-04-10', '2018-04-04', 1, 1.0000000000),
(65, 1, 21, 1.0000000000, '2018-04-11', '2018-04-04', 0, 1.0000000000),
(66, 1, 21, 1.0000000000, '2018-04-04', '2018-04-04', 0, 1.0000000000),
(67, 1, 21, 2.0000000000, '2018-04-05', '2018-04-04', 1, 2.0000000000);

-- --------------------------------------------------------

--
-- Table structure for table `pais`
--

CREATE TABLE IF NOT EXISTS `pais` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pais` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=143 ;

--
-- Dumping data for table `pais`
--

INSERT INTO `pais` (`id`, `pais`) VALUES
(1, 'Argentina'),
(2, 'Bolivia'),
(3, 'Brasil'),
(4, 'Chile'),
(5, 'Colombia'),
(6, 'Costa Rica'),
(7, 'Cuba'),
(8, 'Ecuador'),
(9, 'El Salvador'),
(10, 'Guatemala'),
(11, 'Guyana'),
(12, 'HaitÃ­'),
(13, 'Honduras'),
(14, 'MÃ©xico'),
(15, 'Nicaragua'),
(16, 'PanamÃ¡'),
(17, 'Paraguay'),
(18, 'PerÃº'),
(19, 'Puerto Rico'),
(20, 'Rep. Dominicana'),
(21, 'Surinam'),
(22, 'Uruguay'),
(23, 'Venezuela'),
(24, 'CanadÃ¡'),
(25, 'Estados Unidos'),
(26, 'Alemania'),
(27, 'Andorra'),
(28, 'Austria'),
(29, 'BÃ©lgica'),
(30, 'Bosnia Herzegovina'),
(31, 'Bulgaria'),
(32, 'Ciudad del Vaticano'),
(33, 'Dinamarca'),
(34, 'Escocia'),
(35, 'EspaÃ±a'),
(36, 'Finlandia'),
(37, 'Francia'),
(38, 'Grecia'),
(39, 'Holanda'),
(40, 'Hungria'),
(41, 'Irlanda'),
(42, 'Italia'),
(43, 'Luxemburgo'),
(44, 'MÃ³naco'),
(45, 'Noruega'),
(46, 'Polonia'),
(47, 'Portugal'),
(48, 'Reino Unido'),
(49, 'Rep. de Croatia'),
(50, 'Rep. de Estonia'),
(51, 'Rep. de Georgia'),
(52, 'Rep. de Lithuania'),
(53, 'Rep. de Slovenia'),
(54, 'Rumania'),
(55, 'San Marino'),
(56, 'Suecia'),
(57, 'Suiza'),
(58, 'Ucrania'),
(59, 'Yugoslavia'),
(60, 'Antillas Holandesas'),
(61, 'Aruba'),
(62, 'Bahamas'),
(63, 'Barbados'),
(64, 'Bermuda'),
(65, 'Grenada'),
(66, 'Jamaica'),
(67, 'Martinique'),
(68, 'Trinidad y Tobago'),
(69, 'AfghanistÃ¡n'),
(70, 'Albania'),
(71, 'Algeria'),
(72, 'Angola'),
(73, 'Arabia Saudita'),
(74, 'Australia'),
(75, 'Bangladesh'),
(76, 'Cambodia'),
(77, 'CamerÃºn'),
(78, 'China'),
(79, 'Congo'),
(80, 'Egipto'),
(81, 'Emiratos Arabes Unidos'),
(82, 'EtiopÃ­a'),
(83, 'Filipinas'),
(84, 'Ghana'),
(85, 'Gibraltar'),
(86, 'Groenlandia'),
(87, 'Guinea'),
(88, 'Hong Kong'),
(89, 'India'),
(90, 'Indonesia'),
(91, 'IrÃ¡n'),
(92, 'Iraq'),
(93, 'Islandia'),
(94, 'Israel'),
(95, 'JapÃ³n'),
(96, 'Kenya'),
(97, 'Korea'),
(98, 'Kuwait'),
(99, 'LÃ­bano'),
(100, 'Liberia'),
(101, 'Libia'),
(102, 'Madagascar'),
(103, 'Malaysia'),
(104, 'Malta'),
(105, 'Marruecos'),
(106, 'Mauritania'),
(107, 'Mongolia'),
(108, 'Mozambique'),
(109, 'Namibia'),
(110, 'Nepal'),
(111, 'Niger'),
(112, 'Nigeria'),
(113, 'Nueva Zelanda'),
(114, 'PakistÃ¡n'),
(115, 'Polinesia Francesa'),
(116, 'Rep. Central Africana'),
(117, 'Rep. Checa'),
(118, 'Rep. de Armenia'),
(119, 'Rep. de Belarusia'),
(120, 'Rep. de China'),
(121, 'Rep. de Korea'),
(122, 'Rep. de Moldova'),
(123, 'Rusia'),
(124, 'Sahara Oriental'),
(125, 'Senegal'),
(126, 'Singapur'),
(127, 'Siria'),
(128, 'Somalia'),
(129, 'SudÃ¡n'),
(130, 'Sur Africa'),
(131, 'Swazilandia'),
(132, 'Tailandia'),
(133, 'TaiwÃ¡n'),
(134, 'Tunisia'),
(135, 'TurkmenistÃ¡n'),
(136, 'TurquÃ­a'),
(137, 'Uganda'),
(138, 'VietNam'),
(139, 'Yemen'),
(140, 'Zaire'),
(141, 'Zambia'),
(142, 'Zimbabwe');

-- --------------------------------------------------------

--
-- Table structure for table `tipo_usuario`
--

CREATE TABLE IF NOT EXISTS `tipo_usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_usuario` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`id`, `tipo_usuario`) VALUES
(1, 'Administrador'),
(2, 'consultador');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) NOT NULL,
  `apellido` varchar(25) NOT NULL,
  `nacionalidad` int(3) NOT NULL,
  `correo` varchar(99) NOT NULL,
  `telefono` varchar(25) NOT NULL,
  `fecha_reg` date NOT NULL,
  `fecha_mod` date DEFAULT NULL,
  `activo` tinyint(1) NOT NULL,
  `password` varchar(32) NOT NULL,
  `telefono2` varchar(25) DEFAULT NULL,
  `id_tipo_usuario` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=43 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `nombre`, `apellido`, `nacionalidad`, `correo`, `telefono`, `fecha_reg`, `fecha_mod`, `activo`, `password`, `telefono2`, `id_tipo_usuario`) VALUES
(10, 'jesus nigga', 'olivares nigga', 33, 'test', '12312312', '2018-01-02', NULL, 1, '0cc175b9c0f1b6a831c399e269772661', '12312312', 2),
(11, 'aaaaa', 'aaaaa', 11, 'a', 'aaaaa', '2018-01-02', NULL, 1, '9271d6eecedd55fcfa6143a33029d496', 'aaaaa', 2),
(16, 'niggarapias', 'anvaklentin', 1, 'nigga@nigga.nigga', '123456', '2018-01-08', NULL, 1, '9271d6eecedd55fcfa6143a33029d496', '123456', 2),
(21, 'a', 'a', 27, 'a', '123', '2018-01-22', NULL, 1, '0cc175b9c0f1b6a831c399e269772661', '123', 1),
(22, 'v', 'v', 138, 'v', '123', '2018-01-22', NULL, 1, '9e3669d19b675bd57058fd4664205d2a', '123', 0),
(23, 'z', 'z', 140, 'z', '123', '2018-01-22', NULL, 1, 'fbade9e36a3f36d3d676c1b808451dd7', '123', 0),
(24, 'q', 'q', 124, 'q', '21', '2018-01-22', NULL, 1, '7694f4a66316e53c8cdd9d9954bd611d', '2', 0),
(26, 's', 's', 126, 's', '21', '2018-01-22', NULL, 1, '03c7c0ace395d80182db07ae2c30f034', '2', 0),
(27, 'jajaja', 'jajaja', 66, 'jajaja', '123', '2018-01-30', NULL, 1, '9271d6eecedd55fcfa6143a33029d496', '123123', 0),
(28, 'xd', 'xd', 66, 'xd', '321', '2018-01-30', NULL, 1, '9271d6eecedd55fcfa6143a33029d496', '321321', 0),
(29, 'ji', 'ji', 95, 'ji', '90', '2018-02-01', NULL, 1, '9271d6eecedd55fcfa6143a33029d496', '9090', 2),
(30, 'Alex', 'Test', 42, 'athena.up.sa@gmail.com', '534543', '2018-02-02', NULL, 1, 'd1063fc523ef316fba32322382b78830', '2343424', 2),
(31, 'Rubi', 'Lastname', 14, 'test@test.test', '123', '2018-02-03', NULL, 1, '4817ca8a7afdcf0a67e6dd941a7b00dc', '456', 2),
(32, 'rubicancun', 'playa', 14, 'rubigarces1@gmail.com', '4444177316', '2018-02-05', NULL, 1, '52158110656d07d7aa7499fffd04a343', '4444177316', 2),
(33, 'Alessio', 'Cucciolino', 42, 'leo.matt.england@gmail.com', '3357412373', '2018-02-06', NULL, 1, '827ccb0eea8a706c4c34a16891f84e7b', '3357412373', 2),
(34, 'Alessio', 'Cucciolino', 42, 'cuccioletto@cuccioletto.it', '00393357412373', '2018-02-06', NULL, 1, 'aaf9fa8e171bc8396b0c057fbf03eee1', '00393357412373', 2),
(35, 'alex', '2', 42, 'asoasof@ssadd.it', '23424332', '2018-02-23', NULL, 1, 'da7837570cd0397accd913dc81824b83', '235324234', 2),
(36, 'marzo', 'marzo', 1, 'marzo', '123', '2018-03-08', NULL, 1, '52b073c34b10fb26da4b6f099273841e', '123', 2),
(37, 'support@athenacryptobank.', 'support@athenacryptobank.', 42, 'support@athenacryptobank.com', '0000', '2018-03-08', NULL, 1, '1ca9550c48a31e5c80a98e8b56081bf6', '0000', 1),
(38, 'test', 'test not obligatory', 42, 'assistenzaroma@hotmail,com', '003954654654', '2018-03-21', NULL, 1, '656563549c226d52be0032e8e790c96b', '0032654649', 2),
(39, 'test1', 'test1', 23, 'test1', 'test1', '2018-03-21', NULL, 1, '5a105e8b9d40e1329780d62ea2265d8a', 'test1', 2),
(40, 'Alex', 'Merri', 3, 'sadsad@sad.com', 'sadsad@sad.com', '2018-03-23', NULL, 1, '00920e78786976f1ddee4e0031728173', 'sadsad@sad.com', 2),
(41, 'Brasil', 'Brasil', 3, 'Brasil', '123', '2018-04-10', NULL, 1, '0cc175b9c0f1b6a831c399e269772661', '123', 2),
(42, 'cuba', 'cuba', 7, 'cuba', '123', '2018-04-10', NULL, 1, '0cc175b9c0f1b6a831c399e269772661', '123', 2);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_usuarios_pais` FOREIGN KEY (`id`) REFERENCES `pais` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
