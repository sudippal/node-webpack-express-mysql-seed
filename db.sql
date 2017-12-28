# Dump of table user_master
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_master`;

CREATE TABLE `user_master` (
  `user_id` bigint(11) NOT NULL auto_increment,
  `user_email` varchar(100) default NULL,
  `user_password` varchar(32) default NULL,
  `user_name` varchar(50) default NULL,
  `user_location` varchar(70) default NULL,
  `user_gender` char(1) default NULL,
  `joined_on` date default NULL,
  PRIMARY KEY  (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*!40000 ALTER TABLE `user_master` DISABLE KEYS */;

INSERT INTO `user_master` (`user_id`, `user_email`, `user_password`, `user_name`, `user_location`, `user_gender`, `joined_on`)
VALUES
	(1,'testuser1@demo.com','password','Test User 1','Brazil','M','2014-02-21'),
	(2,'testuser2@demo.com','password','Test User 2','Santo Domingo, RepÃºblica Dominicana','F','2014-03-20'),
	(3,'testuser3@demo.com','password','Test User 3','Miami, Florida','M','2015-03-26'),
	(4,'info@sudippal.com','password','Sudippal','Kolkata, India','M','2016-04-01'),
	(5,'testuser5@demo.com','password','Test User 5','Atlanta, Georgia','M','2017-10-26');

/*!40000 ALTER TABLE `user_master` ENABLE KEYS */;
