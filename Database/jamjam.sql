-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 27, 2014 at 10:10 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `jamjam`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipe_contains`
--

CREATE TABLE IF NOT EXISTS `recipe_contains` (
  `recipe_id` int(11) NOT NULL DEFAULT '0',
  `ingredient_name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`recipe_id`,`ingredient_name`),
  KEY `ingredient_name` (`ingredient_name`)
  CONSTRAINT `recipe_contains_c1` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`recipe_id`),
  CONSTRAINT `recipe_contains_c2` FOREIGN KEY (`ingredient_name`) REFERENCES `ingredients` (`name`);
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE IF NOT EXISTS `ingredients` (
  `name` varchar(255) NOT NULL,
  `allergens` varchar(255) DEFAULT NULL,
  `diets` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`name`, `allergens`, `diets`) VALUES
('cake mix', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE IF NOT EXISTS `recipes` (
  `recipe_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `directions` longtext NOT NULL,
  `preparation time` int(11) NOT NULL,
  PRIMARY KEY (`recipe_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`recipe_id`, `name`, `directions`, `preparation time`) VALUES
(1, 'cookies', 'make cookies', 60),
(2, 'cake', 'make stuff', 9000);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email_address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `allergies` varchar(255) DEFAULT NULL,
  `diet` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

------------------------------------------------------------

--
-- Table structure for table `user_owns
--
CREATE TABLE IF NOT EXISTS `user_owns` (
  `user_id` int(11) NOT NULL,
  `ingredient_name` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`, `ingredient_name`),
  CONSTRAINT `user_owns_c1` FOREIGN KEY user_id REFERENCES `user` (`user_id`),
  CONSTRAINT `user_owns_c2` FOREIGN KEY `ingredients` (`ingredient_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `email_address`, `password`, `allergies`, `diet`) VALUES
(4, 'name', 'email@site.com', 'password12412', 'none', 'yes'),
(5, 'TestUser1', 'test@test.com', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', NULL, NULL);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contains`
--
ALTER TABLE `contains`
  ADD 

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
