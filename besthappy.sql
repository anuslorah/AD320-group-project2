-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: mysql.websitesinseattle.com
-- Generation Time: Mar 05, 2019 at 02:10 PM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `besthappy`
--

-- --------------------------------------------------------

--
-- Table structure for table `bar`
--

CREATE TABLE `bar` (
  `barID` int(11) NOT NULL,
  `barName` varchar(32) NOT NULL,
  `streetAddress` text NOT NULL,
  `city` varchar(32) NOT NULL,
  `zipcode` int(5) NOT NULL,
  `phone` int(10) NOT NULL,
  `happyHour` text NOT NULL,
  `awesome` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bar`
--

INSERT INTO `bar` (`barID`, `barName`, `streetAddress`, `city`, `zipcode`, `phone`, `happyHour`, `awesome`) VALUES(1, 'bar3', 'sadadsgadg', 'moscow', 123, 121212, '4=7', 'it is very cosy and warm');
INSERT INTO `bar` (`barID`, `barName`, `streetAddress`, `city`, `zipcode`, `phone`, `happyHour`, `awesome`) VALUES(3, 'Capitol Cider', '818 E Pike St, Seattle, WA 98122', 'Seattle', 98102, 2069316456, 'M-F 4-6pm', 'Everything is GF except the beer!!!');
INSERT INTO `bar` (`barID`, `barName`, `streetAddress`, `city`, `zipcode`, `phone`, `happyHour`, `awesome`) VALUES(6, 'Hell Hunt', ' Pikk 39', 'Tallinn', 10133, 372, '4 to 5 daily', 'Great seection of beers and best pelmeni in town');
INSERT INTO `bar` (`barID`, `barName`, `streetAddress`, `city`, `zipcode`, `phone`, `happyHour`, `awesome`) VALUES(7, 'PADA', 'Rumbi tÃ¤nav T1', 'Tallinn', 10415, 1234567890, 'daily 3-5', 'open til 4am!');
INSERT INTO `bar` (`barID`, `barName`, `streetAddress`, `city`, `zipcode`, `phone`, `happyHour`, `awesome`) VALUES(8, 'test bar', 'bobobobob', 'moscow', 12, 7878, '3-4', 'yeah!');
INSERT INTO `bar` (`barID`, `barName`, `streetAddress`, `city`, `zipcode`, `phone`, `happyHour`, `awesome`) VALUES(10, 'test22', 'test street', 'moscow', 22, 344365634, '6=8', 'they have snow cones!');
INSERT INTO `bar` (`barID`, `barName`, `streetAddress`, `city`, `zipcode`, `phone`, `happyHour`, `awesome`) VALUES(11, 'Witness', '410 Broadway E', 'Seattle', 98102, 1231231234, '3-6', 'Greate place!');
INSERT INTO `bar` (`barID`, `barName`, `streetAddress`, `city`, `zipcode`, `phone`, `happyHour`, `awesome`) VALUES(12, 'green and cozy', 'moo st', 'moscow', 99, 123455, '4-5-6', 'it is super cozy and they have vodka shots i every imaginable flavor');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_email` varchar(50) NOT NULL,
  `user_first` varchar(35) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_last` varchar(35) NOT NULL,
  `user_pwd` varchar(250) NOT NULL,
  `user_uid` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_email`, `user_first`, `user_id`, `user_last`, `user_pwd`, `user_uid`) VALUES('admin@admin.com', 'admin', 5, 'admin', '$2y$10$aGQhPwT0XVuoZ1h.bDjfNO2JzG5P4l7/AUYyhJg98btDEYZ6PeKjC', 'admin');
INSERT INTO `users` (`user_email`, `user_first`, `user_id`, `user_last`, `user_pwd`, `user_uid`) VALUES('anuslorah@hotmail.com', 'Anu', 6, 'Slorah', '$2y$10$B8yNFXEQndnjtKOxrA2yxeCcATUabeQX4R.xTn.GNMBnyyqyxOdE.', 'anuslorah');
INSERT INTO `users` (`user_email`, `user_first`, `user_id`, `user_last`, `user_pwd`, `user_uid`) VALUES('anuslorah@hotmail.com', 'Anu', 7, 'Slorah', '$2y$10$ySOJ614C9ltZAvqAUlEVdO0ShUiwshLtjHdoUvIZmUamX56mgB7Hq', 'moo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bar`
--
ALTER TABLE `bar`
  ADD PRIMARY KEY (`barID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bar`
--
ALTER TABLE `bar`
  MODIFY `barID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
