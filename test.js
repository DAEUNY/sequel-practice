Executing (default): CREATE TABLE IF NOT EXISTS `Categories` (`id` INTEGER NOT NULL auto_increment , `food_type` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;

Executing (default): SHOW INDEX FROM `Categories` FROM `seq3`

Executing (default): DROP TABLE IF EXISTS `Regions`;

Executing (default): CREATE TABLE IF NOT EXISTS `Regions` (`id` INTEGER NOT NULL auto_increment , `city` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;

Executing (default): SHOW INDEX FROM `Regions` FROM `seq3`

Executing (default): DROP TABLE IF EXISTS `Articles`;

Executing (default): CREATE TABLE IF NOT EXISTS `Articles` (`id` INTEGER NOT NULL auto_increment , `title` VARCHAR(255) NOT NULL, `image` BLOB, `content` VARCHAR(255), `category_id` INTEGER, `market` VARCHAR(255) NOT NULL, `region_id` INTEGER, `date` DATETIME NOT NULL, `time` VARCHAR(255) NOT NULL, `total_mate` INTEGER NOT NULL, `current_mate` INTEGER NOT NULL, `trade_type` VARCHAR(255) NOT NULL, `status` TINYINT(1) NOT NULL DEFAULT false, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`), FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE, FOREIGN KEY (`region_id`) REFERENCES `Regions` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE) ENGINE=InnoDB;

Executing (default): SHOW INDEX FROM `Articles` FROM `seq3`

Executing (default): DROP TABLE IF EXISTS `Users`;

Executing (default): CREATE TABLE IF NOT EXISTS `Users` (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(255) NOT NULL UNIQUE, `email` VARCHAR(255) NOT NULL UNIQUE, `password` VARCHAR(255) NOT NULL, `profile_image` BLOB, `region_id` INTEGER, `block` TINYINT(1) NOT NULL DEFAULT false, `type` VARCHAR(255) NOT NULL DEFAULT 'USER', `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`), FOREIGN KEY (`region_id`) REFERENCES `Regions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;

Executing (default): SHOW INDEX FROM `Users` FROM `seq3`

Executing (default): DROP TABLE IF EXISTS `Chats`;

Executing (default): CREATE TABLE IF NOT EXISTS `Chats` (`id` INTEGER NOT NULL auto_increment , `user_id` INTEGER, `article_id` INTEGER, `contents` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`), FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE, FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;

Executing (default): SHOW INDEX FROM `Chats` FROM `seq3`

Executing (default): DROP TABLE IF EXISTS `Reports`;

Executing (default): CREATE TABLE IF NOT EXISTS `Reports` (`id` INTEGER NOT NULL auto_increment , `user_id` INTEGER NOT NULL, `count` INTEGER NOT NULL DEFAULT 1, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`), FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE) ENGINE=InnoDB;

Executing (default): SHOW INDEX FROM `Reports` FROM `seq3`

Executing (default): DROP TABLE IF EXISTS `UserArticles`;

Executing (default): CREATE TABLE IF NOT EXISTS `UserArticles` (
  `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `article_id` INTEGER , `user_id` INTEGER , 
  PRIMARY KEY (`article_id`, `user_id`), 
  FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`) 
    ON DELETE CASCADE ON UPDATE CASCADE, 
  FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) 
    ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;

Executing (default): SHOW INDEX FROM `UserArticles` FROM `seq3`