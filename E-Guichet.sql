-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 03, 2023 at 09:30 AM
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
  `module` varchar(255) NOT NULL,
  `type_email` enum('Demande d ajout de module') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `demande_ajout_de_modules`
--

INSERT INTO `demande_ajout_de_modules` (`id`, `nom_etudiant`, `prenom_etudiant`, `cne_etudiant`, `cni_etudiant`, `appoge`, `semestre`, `module`, `type_email`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'mohamed', 'khairoun', 'P110126369', 'L633824', '123456789@gmail.com', 'yoursemester', 'الفكر الفلسفي', 'Demande d ajout de module', '2023-05-21 19:34:25', '2023-05-21 19:34:25', NULL),
(2, 'mohamed', 'khairoun', 'P110126369', 'L633824', '123456789@gmail.com', 'yoursemester', 'الفكر الفلسفي', 'Demande d ajout de module', '2023-05-21 20:50:54', '2023-05-21 20:50:54', NULL),
(3, 'mohamedsd', 'khairounsd', '1', '1', '19@gmail.com', 'yoursemester', 'الفكر الفلسفي', 'Demande d ajout de module', '2023-05-21 22:28:20', '2023-05-21 22:28:20', NULL),
(4, 'mo', 's', '2', '2', '1@gmail.com', 'yoursemester', 'الفكر الفلسفي', 'Demande d ajout de module', '2023-05-21 22:40:25', '2023-05-21 22:40:25', NULL),
(5, '3', '3', '3', '3', '3@gmail.com', 'yoursemester', 'الفكر الفلسفي', 'Demande d ajout de module', '2023-05-21 22:42:59', '2023-05-21 22:42:59', NULL),
(6, '3', '3', '3', '3', '3@gmail.com', 'yoursemester', 'مدخل الى علم النفس', 'Demande d ajout de module', '2023-05-21 22:42:59', '2023-05-21 22:42:59', NULL),
(7, '4', '4', '4', '4', '4@gmail.com', 'yoursemester', 'الفكر الفلسفي', 'Demande d ajout de module', '2023-05-21 22:52:29', '2023-05-21 22:52:29', NULL),
(8, '5', '5', '5', '5', '5', 'yoursemester', 'الفكر الفلسفي', 'Demande d ajout de module', '2023-05-21 23:09:08', '2023-05-21 23:09:08', NULL),
(11, 'user', 'Noureddine', 'R765475679', 'n789675', '6', 'S1', 'النهضة الأوروبية', 'Demande d ajout de module', '2023-05-29 13:25:07', '2023-05-29 13:25:07', NULL),
(12, 'user', 'Noureddine', 'R765475679', 'n789675', '6', 'S1', 'اللغات', 'Demande d ajout de module', '2023-05-29 13:25:07', '2023-05-29 13:25:07', NULL);

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
  `type_email` enum('Demande de correction de donnees') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `demande_correction_de_donnees`
--

INSERT INTO `demande_correction_de_donnees` (`id`, `nom_etudiant`, `prenom_etudiant`, `cne_etudiant`, `cni_etudiant`, `appoge`, `type_email`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'mohamed', 'khairoun', 'P110126369', 'L633824', '123456789@gmail.com', 'Demande de correction de donnees', '2023-05-21 19:33:30', '2023-05-21 19:33:30', NULL),
(2, '4', '4', '4', '4', '4@gmail.com', 'Demande de correction de donnees', '2023-05-21 23:00:46', '2023-05-21 23:00:46', NULL),
(3, '5', '5', '5', '5', '5', 'Demande de correction de donnees', '2023-05-21 23:08:47', '2023-05-21 23:08:47', NULL),
(5, 'user', 'Noureddine', 'R765475679', 'n789675', '6', 'Demande de correction de donnees', '2023-05-29 13:37:33', '2023-05-29 13:37:33', NULL);

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
  `type_email` enum('Demande de correction de note') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `demande_de_corrections`
--

INSERT INTO `demande_de_corrections` (`id`, `nom_etudiant`, `prenom_etudiant`, `cne_etudiant`, `cni_etudiant`, `appoge`, `semestre`, `module`, `type_email`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '4', '4', '4', '4', '4@gmail.com', 's1', 'اسس علم الاجتماع', 'Demande de correction de note', '2023-05-21 22:55:09', '2023-05-21 22:55:09', NULL),
(2, '4', '4', '4', '4', '4@gmail.com', 's1', 'مناهج ونصوص فلسفية', 'Demande de correction de note', '2023-05-21 22:57:40', '2023-05-21 22:57:40', NULL),
(3, '4', '4', '4', '4', '4@gmail.com', 's1', 'ميادين وتيارات علم النفس', 'Demande de correction de note', '2023-05-21 22:58:27', '2023-05-21 22:58:27', NULL),
(4, '4', '4', '4', '4', '4@gmail.com', 's1', 'اللغات', 'Demande de correction de note', '2023-05-21 22:58:49', '2023-05-21 22:58:49', NULL),
(5, '4', '4', '4', '4', '4@gmail.com', 's2', 'المؤسسات السياسية', 'Demande de correction de note', '2023-05-21 23:06:31', '2023-05-21 23:06:31', NULL),
(6, '5', '5', '5', '5', '5', 's2', 'علم النفس الاجتماعي', 'Demande de correction de note', '2023-05-21 23:09:26', '2023-05-21 23:09:26', NULL),
(7, 'mohamed', 'khairoun', 'P110126369', 'L633824', '123456789@gmail.com', 's3', 'صوتيات وصواتة', 'Demande de correction de note', '2023-05-22 06:45:28', '2023-05-22 06:45:28', NULL),
(8, 'user', 'Noureddine', 'R765475679', 'n789675', '6', 'S1', 'الغرب الإسلامي: من الفتح إلى القرن 5الهجري', 'Demande de correction de note', '2023-05-27 16:17:49', '2023-05-27 16:17:49', NULL),
(9, 'user', 'Noureddine', 'R765475679', 'n789675', '6', 'S1', 'اللغات', 'Demande de correction de note', '2023-05-27 20:08:18', '2023-05-27 20:08:18', NULL),
(10, 'user', 'Noureddine', 'R765475679', 'n789675', '6', 'S2', 'الإغريق و الرومان', 'Demande de correction de note', '2023-05-27 20:11:53', '2023-05-27 20:11:53', NULL),
(11, 'user', 'Noureddine', 'R765475679', 'n789675', '6', 's3', 'تحليل الوثيقة', 'Demande de correction de note', '2023-05-29 13:10:44', '2023-05-29 13:10:44', NULL),
(12, 'user', 'Noureddine', 'R765475679', 'n789675', '6', 's3', 'الجغرافية التاريخية', 'Demande de correction de note', '2023-06-03 06:27:37', '2023-06-03 06:27:37', NULL);

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
(2, 'user', 'Noureddine', 'R765475679', 'n789675', 'ettalha@user.com', 1, 1, '2023-05-28 10:00:55', '2023-05-28 10:00:55', NULL),
(3, 'user', 'Noureddine', 'R765475679', 'n789675', 'ettalha@user.com', 1, 0, '2023-05-28 10:01:20', '2023-05-28 10:01:20', NULL),
(4, 'user', 'Noureddine', 'R765475679', 'n789675', 'ettalha@user.com', 0, 1, '2023-05-28 10:01:23', '2023-05-28 10:01:23', NULL),
(5, 'user', 'Noureddine', 'R765475679', 'n789675', 'ettalha@user.com', 1, 1, '2023-05-29 13:04:03', '2023-05-29 13:04:03', NULL),
(6, 'user', 'Noureddine', 'R765475679', 'n789675', 'ettalha@user.com', 0, 1, '2023-06-01 09:35:44', '2023-06-01 09:35:44', NULL),
(7, 'user', 'Noureddine', 'R765475679', 'n789675', 'ettalha@user.com', 0, 1, '2023-06-01 09:36:05', '2023-06-01 09:36:05', NULL);

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
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_04_24_165137_create_documents_table', 1),
(6, '2023_05_11_211834_create_demande_de_corrections_table', 1),
(7, '2023_05_11_211835_create_demande_ajout_de_modules_table', 1),
(8, '2023_05_11_211836_create_demande_correction_de_donnees_table', 1),
(10, '2023_05_22_072800_add_fillier_to_users_table', 2),
(11, '2023_05_22_075408_add_semester_to_users_table', 3);

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
  `fillier` varchar(255) NOT NULL,
  `semester` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `prenom`, `cne`, `cni`, `email`, `is_admin`, `Appoge`, `fillier`, `semester`, `role`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'Noureddine', 'H7659', 'n7586', 'ettalha@admin.com', 1, NULL, '', '', 'superadmin', NULL, '$2y$10$hlYLuOSXAEWcWjEbrVzndu4aMO9JKnYS/Ua11bz7oTzYWGu3TnqUG', NULL, '2023-05-21 19:25:33', '2023-05-21 19:25:33'),
(2, 'mohamed', 'khairoun', 'P110126369', 'L633824', '123456789@gmail.com', 0, '18041544\r\n', 'Etudes Arabes', 's3', NULL, NULL, '$2y$10$PDPinsyt/KlZVbO//ilo4uRbV.6ARiI.kf4L0F1rYX1/lkGTERAEG', NULL, '2023-05-21 19:25:33', '2023-05-21 19:25:33'),
(3, 'mohamedsd', 'khairounsd', '1', '1', '19@gmail.com', 0, '1\r\n', '', '', NULL, NULL, '$2y$10$PDPinsyt/KlZVbO//ilo4uRbV.6ARiI.kf4L0F1rYX1/lkGTERAEG', NULL, '2023-05-21 19:25:33', '2023-05-21 19:25:33'),
(4, 'mo', 's', '2', '2', '1@gmail.com', 0, '2', '', '', NULL, NULL, '$2y$10$PDPinsyt/KlZVbO//ilo4uRbV.6ARiI.kf4L0F1rYX1/lkGTERAEG', NULL, '2023-05-21 19:25:33', '2023-05-21 19:25:33'),
(5, '3', '3', '3', '3', '3@gmail.com', 0, '3', '', '', NULL, NULL, '$2y$10$PDPinsyt/KlZVbO//ilo4uRbV.6ARiI.kf4L0F1rYX1/lkGTERAEG', NULL, '2023-05-21 19:25:33', '2023-05-21 19:25:33'),
(6, '4', '4', '4', '4', '4@gmail.com', 0, '4', '', '', NULL, NULL, '$2y$10$PDPinsyt/KlZVbO//ilo4uRbV.6ARiI.kf4L0F1rYX1/lkGTERAEG', NULL, '2023-05-21 19:25:33', '2023-05-21 19:25:33'),
(7, '5', '5', '5', '5', '5', 0, '5', '', '', NULL, NULL, '$2y$10$PDPinsyt/KlZVbO//ilo4uRbV.6ARiI.kf4L0F1rYX1/lkGTERAEG', NULL, '2023-05-21 19:25:33', '2023-05-21 19:25:33'),
(8, 'user', 'Noureddine', 'R765475679', 'n789675', 'ettalha@user.com', 0, '6', 'Histoire & Civilisation', 's4', NULL, NULL, '$2y$10$bkivY5QrxuqdJ.dQLID0JOWp9NNVtxsEqYS48GuecHJF6sHf9V4JS', NULL, '2023-05-21 19:25:33', '2023-05-21 19:25:33'),
(9, 'emp', 'Noureddine', 'H73435', 'n754532', 'ettalha@emp.com', 1, NULL, '', '', 'doc', NULL, '$2y$10$hlYLuOSXAEWcWjEbrVzndu4aMO9JKnYS/Ua11bz7oTzYWGu3TnqUG', NULL, '2023-05-21 19:25:33', '2023-05-21 19:25:33'),
(10, 'user0', 'test0', 'R7653525', 'n35356', '655870', 0, '2343546436', 'Histoire & Civilisation', 's3', NULL, NULL, '$2y$10$bkivY5QrxuqdJ.dQLID0JOWp9NNVtxsEqYS48GuecHJF6sHf9V4JS', NULL, '2023-05-21 19:25:33', '2023-05-21 19:25:33');

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `demande_correction_de_donnees`
--
ALTER TABLE `demande_correction_de_donnees`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `demande_de_corrections`
--
ALTER TABLE `demande_de_corrections`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `document`
--
ALTER TABLE `document`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
