-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 04, 2023 at 01:14 PM
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
-- Database: `Guichet`
--

-- --------------------------------------------------------

--
-- Table structure for table `demande_ajout_de_modules`
--

CREATE TABLE `demande_ajout_de_modules` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom_etudiant` varchar(255) NOT NULL,
  `prenom_etudiant` varchar(255) NOT NULL,
  `cne_etudiant` varchar(255) NOT NULL,
  `cni_etudiant` varchar(255) NOT NULL,
  `appoge` varchar(255) NOT NULL,
  `semestre` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `module` varchar(255) NOT NULL,
  `type_email` enum('Demande d ajout de module') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `demande_ajout_de_modules`
--

INSERT INTO `demande_ajout_de_modules` (`id`, `nom_etudiant`, `prenom_etudiant`, `cne_etudiant`, `cni_etudiant`, `appoge`, `semestre`, `telephone`, `module`, `type_email`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'youssef', 'ufu', '87t78', '89uj', 'u8889', 'S1', '06700600', 'اللغات', 'Demande d ajout de module', '2023-06-04 10:08:29', '2023-06-04 10:08:29', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `demande_correction_de_donnees`
--

CREATE TABLE `demande_correction_de_donnees` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom_etudiant` varchar(255) NOT NULL,
  `prenom_etudiant` varchar(255) NOT NULL,
  `cne_etudiant` varchar(255) NOT NULL,
  `cni_etudiant` varchar(255) NOT NULL,
  `appoge` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `type_email` enum('Demande de correction de donnees') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `demande_de_corrections`
--

CREATE TABLE `demande_de_corrections` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom_etudiant` varchar(255) NOT NULL,
  `prenom_etudiant` varchar(255) NOT NULL,
  `cne_etudiant` varchar(255) NOT NULL,
  `cni_etudiant` varchar(255) NOT NULL,
  `appoge` varchar(255) NOT NULL,
  `semestre` varchar(255) NOT NULL,
  `module` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `type_email` enum('Demande de correction de note') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `demande_de_corrections`
--

INSERT INTO `demande_de_corrections` (`id`, `nom_etudiant`, `prenom_etudiant`, `cne_etudiant`, `cni_etudiant`, `appoge`, `semestre`, `module`, `telephone`, `type_email`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'youssef', 'ufu', '87t78', '89uj', 'u8889', 'S2', 'تاريخ المماليك و العثمانيين', '06700600', 'Demande de correction de note', '2023-06-04 10:09:08', '2023-06-04 10:09:08', NULL);

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
  `telephone` varchar(255) NOT NULL,
  `scolarite` tinyint(1) NOT NULL DEFAULT 0,
  `relevedenote` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(71, '2014_10_12_000000_create_users_table', 18),
(72, '2023_04_24_165137_create_documents_table', 19),
(73, '2023_05_11_211834_create_demande_de_corrections_table', 20),
(74, '2023_05_11_211835_create_demande_ajout_de_modules_table', 21),
(75, '2023_05_11_211836_create_demande_correction_de_donnees_table', 22);

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
  `Appoge` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `fillier` varchar(255) DEFAULT NULL,
  `semester` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `prenom`, `cne`, `cni`, `email`, `is_admin`, `Appoge`, `role`, `email_verified_at`, `fillier`, `semester`, `telephone`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'yhyA', NULL, NULL, NULL, '2admin@admin.com', 1, NULL, 'superadmin', NULL, '', '', NULL, '$2y$10$XPYk4tgfE8/ny2/.ftmuzuXX7FAIw1vFULAino/4I5mZRDLlbKQRW', NULL, '2023-06-04 09:19:13', '2023-06-04 09:19:13'),
(2, 'youssef', 'ufu', '87t78', '89uj', 'youssef.bachar7@gmail.com', 0, 'u8889', NULL, NULL, 'Histoire & Civilisation', '3', '06700600', '$2y$10$eKpZVEJ4aBi0HPhd/3lXyOMHaosizKBpsfcRgBWbsvDAvXVVnGjKa', NULL, '2023-06-04 09:29:21', '2023-06-04 09:29:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `demande_ajout_de_modules`
--
ALTER TABLE `demande_ajout_de_modules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `demande_correction_de_donnees`
--
ALTER TABLE `demande_correction_de_donnees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `demande_de_corrections`
--
ALTER TABLE `demande_de_corrections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `document`
--
ALTER TABLE `document`
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
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_appoge_unique` (`Appoge`),
  ADD UNIQUE KEY `users_role_unique` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `demande_ajout_de_modules`
--
ALTER TABLE `demande_ajout_de_modules`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `demande_correction_de_donnees`
--
ALTER TABLE `demande_correction_de_donnees`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `demande_de_corrections`
--
ALTER TABLE `demande_de_corrections`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `document`
--
ALTER TABLE `document`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

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
