-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-01-2018 a las 12:36:59
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crypto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `criptomonedas`
--

CREATE TABLE `criptomonedas` (
  `id` int(11) NOT NULL,
  `criptomoneda` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Volcado de datos para la tabla `criptomonedas`
--

INSERT INTO `criptomonedas` (`id`, `criptomoneda`) VALUES
(1, 'Bitcoin'),
(2, 'Etherium'),
(3, 'Litecoin'),
(4, 'Dogecoin'),
(5, 'Bytecoin'),
(6, 'Verge'),
(7, 'Ripple'),
(8, 'Stellar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monto_actual`
--

CREATE TABLE `monto_actual` (
  `id` int(11) NOT NULL,
  `id_criptomoneda` float NOT NULL,
  `id_usuario` int(3) NOT NULL,
  `inversion` float(20,6) NOT NULL,
  `fecha` date NOT NULL,
  `fecha_reg` date NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `banco` float(20,6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `monto_actual`
--

INSERT INTO `monto_actual` (`id`, `id_criptomoneda`, `id_usuario`, `inversion`, `fecha`, `fecha_reg`, `activo`, `banco`) VALUES
(1, 1, 9, 11.000000, '2018-01-17', '0000-00-00', 0, 0.000000),
(2, 1, 9, 11.000000, '2018-01-17', '1992-10-10', 1, 0.000000),
(3, 5, 11, 222.000000, '2018-01-21', '2000-10-10', 1, 0.000000),
(4, 2, 11, 222.000000, '2018-01-21', '2000-10-10', 0, 0.000000),
(5, 1, 11, 222.000000, '2018-01-21', '2000-10-10', 1, 0.000000),
(6, 2, 9, 111.000000, '2018-01-21', '2001-01-01', 1, 111.000000),
(7, 8, 11, 777.000000, '2018-01-21', '2022-10-10', 0, 777.000000),
(8, 8, 11, 777.000000, '2018-01-21', '2022-10-10', 1, 777.000000),
(9, 2, 11, 777.010010, '2018-01-22', '2022-10-10', 1, 777.010010);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE `pais` (
  `id` int(11) NOT NULL,
  `pais` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pais`
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
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `id` int(11) NOT NULL,
  `tipo_usuario` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`id`, `tipo_usuario`) VALUES
(1, 'Administrador'),
(2, 'consultador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
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
  `id_tipo_usuario` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `nombre`, `apellido`, `nacionalidad`, `correo`, `telefono`, `fecha_reg`, `fecha_mod`, `activo`, `password`, `telefono2`, `id_tipo_usuario`) VALUES
(9, 'jesus', 'niggaragua', 4, 'test@test.com', '123', '2018-01-02', NULL, 1, 'e10adc3949ba59abbe56e057f20f883e', '123', 1),
(10, 'jesus nigga', 'olivares nigga', 33, 'test@test.com', '12312312', '2018-01-02', NULL, 1, 'e10adc3949ba59abbe56e057f20f883e', '12312312', 2),
(11, 'aaaaa', 'aaaaa', 11, 'a', 'aaaaa', '2018-01-02', NULL, 1, '9271d6eecedd55fcfa6143a33029d496', 'aaaaa', 2),
(16, 'niggarapias', 'anvaklentin', 1, 'nigga@nigga.nigga', '123456', '2018-01-08', NULL, 1, '9271d6eecedd55fcfa6143a33029d496', '123456', 2),
(17, 'mmm', 'mmm', 9, 'mmm@mmm.mmm', '123', '2018-01-15', NULL, 1, '9271d6eecedd55fcfa6143a33029d496', '456', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `criptomonedas`
--
ALTER TABLE `criptomonedas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `monto_actual`
--
ALTER TABLE `monto_actual`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `criptomonedas`
--
ALTER TABLE `criptomonedas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `monto_actual`
--
ALTER TABLE `monto_actual`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `pais`
--
ALTER TABLE `pais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;
--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
