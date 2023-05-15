-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 16, 2023 at 12:58 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `E-Guichet`
--

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

CREATE TABLE `document` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `cne` varchar(255) NOT NULL,
  `cni` varchar(255) NOT NULL,
  `appoge` varchar(255) NOT NULL,
  `scolarite` tinyint(1) NOT NULL DEFAULT 0,
  `relevedenote` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `document`
--

INSERT INTO `document` (`id`, `nom`, `prenom`, `cne`, `cni`, `appoge`, `scolarite`, `relevedenote`, `created_at`, `updated_at`, `deleted_at`) VALUES
(8, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:09', '2023-05-14 18:11:09', NULL),
(9, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:15', '2023-05-14 18:11:15', NULL),
(10, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:18', '2023-05-14 18:11:18', NULL),
(11, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:19', '2023-05-14 18:11:19', NULL),
(12, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:21', '2023-05-14 18:11:21', NULL),
(13, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:27', '2023-05-14 18:11:27', NULL),
(14, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:30', '2023-05-14 18:11:30', NULL),
(15, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:31', '2023-05-14 18:11:31', NULL),
(16, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:33', '2023-05-14 18:11:33', NULL),
(17, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:45', '2023-05-14 18:11:45', NULL),
(18, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:47', '2023-05-14 18:11:47', NULL),
(19, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:48', '2023-05-14 18:11:48', NULL),
(20, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:50', '2023-05-14 18:11:50', NULL),
(21, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:51', '2023-05-14 18:11:51', NULL),
(22, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:52', '2023-05-14 18:11:52', NULL),
(23, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:11:54', '2023-05-14 18:11:54', NULL),
(24, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:00', '2023-05-14 18:12:00', NULL),
(25, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:03', '2023-05-14 18:12:03', NULL),
(26, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:06', '2023-05-14 18:12:06', NULL),
(27, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:07', '2023-05-14 18:12:07', NULL),
(28, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:09', '2023-05-14 18:12:09', NULL),
(29, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:10', '2023-05-14 18:12:10', NULL),
(30, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:11', '2023-05-14 18:12:11', NULL),
(31, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:13', '2023-05-14 18:12:13', NULL),
(32, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:14', '2023-05-14 18:12:14', NULL),
(33, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:15', '2023-05-14 18:12:15', NULL),
(34, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:16', '2023-05-14 18:12:16', NULL),
(35, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:22', '2023-05-14 18:12:22', NULL),
(36, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:23', '2023-05-14 18:12:23', NULL),
(37, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:24', '2023-05-14 18:12:24', NULL),
(38, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:25', '2023-05-14 18:12:25', NULL),
(39, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:26', '2023-05-14 18:12:26', NULL),
(40, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:27', '2023-05-14 18:12:27', NULL),
(41, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:29', '2023-05-14 18:12:29', NULL),
(42, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:31', '2023-05-14 18:12:31', NULL),
(43, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:32', '2023-05-14 18:12:32', NULL),
(44, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:34', '2023-05-14 18:12:34', NULL),
(45, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:35', '2023-05-14 18:12:35', NULL),
(46, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 1, 1, '2023-05-14 18:12:36', '2023-05-14 18:12:36', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `email_logs`
--

CREATE TABLE `email_logs` (
  `id` int(10) UNSIGNED NOT NULL,
  `nome_tudiant` varchar(255) NOT NULL,
  `prenom_tudiant` varchar(255) NOT NULL,
  `cne_tudiant` varchar(255) NOT NULL,
  `cni_tudiant` varchar(255) NOT NULL,
  `appoge` varchar(255) NOT NULL,
  `type_email` enum('Demande de correction de note','Demande de correction de donnees','Demande ajout de module') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `email_logs`
--

INSERT INTO `email_logs` (`id`, `nome_tudiant`, `prenom_tudiant`, `cne_tudiant`, `cni_tudiant`, `appoge`, `type_email`, `created_at`, `updated_at`, `deleted_at`) VALUES
(10, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 'Demande ajout de module', '2023-05-07 11:59:33', '2023-05-07 11:59:33', NULL),
(11, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 'Demande de correction de donnees', '2023-05-07 11:59:48', '2023-05-07 11:59:48', NULL),
(13, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 'Demande de correction de donnees', '2023-05-09 15:53:53', '2023-05-09 15:53:53', NULL),
(14, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 'Demande de correction de donnees', '2023-05-09 16:20:00', '2023-05-09 16:20:00', NULL),
(15, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 'Demande de correction de donnees', '2023-05-09 16:23:19', '2023-05-09 16:23:19', NULL),
(16, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 'Demande de correction de donnees', '2023-05-09 16:26:00', '2023-05-09 16:26:00', NULL),
(20, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 'Demande de correction de note', '2023-05-09 17:30:35', '2023-05-09 17:30:35', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(5, '2023_04_05_012626_create_courses_table', 1),
(6, '2023_04_05_141028_create_document_table', 2),
(12, '2023_04_21_162600_create_documents_table', 3),
(17, '2023_04_24_153918_create_documents_table', 4),
(18, '2023_04_24_153919_create_email_logs_table', 4),
(21, '2023_04_24_162744_create_documents_table', 7),
(22, '2023_04_24_162745_create_email_logs_table', 8),
(29, '2023_04_24_161739_create_documents_table', 9),
(44, '2014_10_12_100000_create_password_reset_tokens_table', 10),
(45, '2019_08_19_000000_create_failed_jobs_table', 10),
(46, '2019_12_14_000001_create_personal_access_tokens_table', 10),
(47, '2023_04_24_161740_create_email_logs_table', 10),
(48, '2023_04_24_165137_create_documents_table', 10),
(50, '2014_10_12_000000_create_users_table', 11),
(51, '2015_09_07_190535_create_languages_table', 12),
(52, '2015_09_10_124414_alter_languages_table', 12),
(53, '2023_05_11_174851_create_documents_table', 13),
(54, '2023_05_11_174853_create_demande_de_corrections_table', 14),
(55, '2023_05_11_180446_create_demande_de_corrections_table', 15),
(56, '2023_05_11_180447_create_demande_ajout_de_modules_table', 15),
(57, '2023_05_11_180448_create_demande_correction_de_donnees_table', 15),
(61, '2023_05_11_192741_create_demande_de_corrections_table', 16),
(62, '2023_05_11_192742_create_demande_ajout_de_modules_table', 16),
(63, '2023_05_11_192743_create_demande_correction_de_donnees_table', 16),
(64, '2023_05_11_211834_create_demande_de_corrections_table', 17),
(65, '2023_05_11_211835_create_demande_ajout_de_modules_table', 17),
(66, '2023_05_11_211836_create_demande_correction_de_donnees_table', 17);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `cne` varchar(255) DEFAULT NULL,
  `cni` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `prenom`, `cne`, `cni`, `email`, `is_admin`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'youssef', 'bachar', 't4358', 't4356', 'youssef.bachar7@gmail.com', 0, NULL, '$2y$10$AXXMxjPiCD94KG/MCw/xz.UFAxrhcw0y9u7yaLdJ/pw/OgW7F.5Vy', NULL, '2023-05-05 21:32:55', '2023-05-05 21:32:55'),
(2, 'yhyA', 'bachar', 't273930', 't56588', 'admin@admin.com', 1, NULL, '$2y$10$GO3oZBh4sR1a.fHac//6T.IiPXa3sOW28tXQ2l7.YYz3z4h64z762', NULL, '2023-05-05 21:34:05', '2023-05-05 21:34:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `email_logs`
--
ALTER TABLE `email_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `document`
--
ALTER TABLE `document`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `email_logs`
--
ALTER TABLE `email_logs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
