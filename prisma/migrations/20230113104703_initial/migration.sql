-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `movieId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `bannerUrl` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `genere` VARCHAR(191) NOT NULL,
    `cast` JSON NOT NULL,

    UNIQUE INDEX `Movie_movieId_key`(`movieId`),
    INDEX `Movie_movieId_name_idx`(`movieId`, `name`),
    UNIQUE INDEX `Movie_movieId_name_key`(`movieId`, `name`),
    FULLTEXT INDEX `Movie_name_slug_genere_idx`(`name`, `slug`, `genere`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
