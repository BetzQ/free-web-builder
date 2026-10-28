# DOKUMEN REFERENSI UTAMA: ARSITEKTUR VISUAL DATABASE & 1-FILE SQL COMPILER
**Lokasi File:** `./alur-pembuatan/REFERENSI-DATABASE.md`
**Tujuan untuk AI Agent:** Gunakan daftar URL, pola desain visual ER Diagram, katalog template industri, dan standar kompilasi DDL SQL di bawah ini sebagai cetak biru (blueprint) untuk membangun **Modul Database Visual Studio** (3 Mode: Default, Semi-Custom, dan Full Imajinasi Mikro) serta mesin generator **`src/engines/sqlCompiler.ts`** (penghasil 1 file `database_full.sql` siap pakai).

---

## 1. Referensi UI Visual Database Builder & ER Diagram Interaktif (Inspirasi Klik-Klik)
Gunakan situs-situs ini sebagai acuan bagaimana orang awam maupun Database Administrator (DBA) bisa merancang tabel, kolom, dan relasi secara visual tanpa perlu menghafal sintaks SQL:
* **ChartDB (Open-Source Instant Database Diagram Editor)** — `https://chartdb.io/` & `https://github.com/chartdb/chartdb`
  * *Apa yang diambil:* Antarmuka visual modern (100% berjalan di browser tanpa server) untuk membuat tabel, menarik garis relasi (*Foreign Key*), memilih dialek database (PostgreSQL, MySQL, SQLite, SQL Server), dan langsung mengekspor skrip DDL `.sql` siap pakai.
* **DrawDB (Free Browser-Based Database Design & SQL Generator)** — `https://www.drawdb.app/` & `https://github.com/drawdb-app/drawdb`
  * *Apa yang diambil:* Panel samping (*Sidebar Inspector*) untuk mengatur kolom, tipe data, *Primary Key*, *Auto Increment / UUID*, nilai *Default*, *Nullable*, *Unique*, pembuatan *Index*, serta fitur *Template Gallery* yang bisa dimuat dengan 1 klik.
* **Azimutt (Database Explorer & Schema Designer for Large Systems)** — `https://azimutt.app/`
  * *Apa yang diambil:* Kemampuan mengelola skema berskala besar (puluhan hingga ratusan tabel untuk korporasi) dengan fitur pengelompokan modul (*Table Groups/Domains*), pencarian cepat kolom, dan analisis *missing index* atau *missing foreign key*.
* **dbdiagram.io & DBML (Database Markup Language)** — `https://dbdiagram.io/` & `https://dbml.dbdiagram.io/home/`
  * *Apa yang diambil:* Konsep sinkronisasi dua arah antara tampilan visual kartu tabel dan definisi kode skema, serta kejelasan visual garis relasi `1-to-1`, `1-to-Many (1:N)`, dan `Many-to-Many (M:N)`.
* **Supabase Studio (Table Editor & Schema Visualizer)** — `https://supabase.com/docs/guides/database/tables`
  * *Apa yang diambil:* Kemudahan penggunaan bagi orang awam (tampilan mirip *Spreadsheet* / Excel saat menambah kolom) dipadukan dengan tombol satu klik untuk mengaktifkan **Row-Level Security (RLS)** dan *Realtime Subscriptions*.
* **Prisma Studio & Drizzle Studio** — `https://www.prisma.io/studio` & `https://orm.drizzle.team/drizzle-studio/overview`
  * *Apa yang diambil:* Tampilan pratinjau isi data (*Dummy Seed Data Preview*) sehingga user bisa langsung melihat simulasi baris data di dalam tabel yang sedang mereka rancang.

---

## 2. Referensi Katalog Template Skema Database (Untuk Mode 1: Default & Mode 2: Semi-Custom)
Agar user yang memilih **Mode Default (Terima Jadi)** atau **Mode Semi-Custom (Centang Modul)** mendapatkan struktur tabel berstandar industri yang matang:
* **Database Answers / Data Models Library** — `https://www.databaseanswers.org/data_models/` & **DrawSQL Templates** — `https://drawsql.app/templates`
  * *Apa yang diambil:* Katalog cetak biru skema siap pakai yang wajib tersedia di dalam `src/data/presets-database.json`:
    1. **E-Commerce & Marketplace Lengkap:** (`users`, `roles`, `categories`, `products`, `product_variants`, `inventories`, `carts`, `orders`, `order_items`, `payments`, `shipments`, `reviews`, `vouchers`).
    2. **SaaS Multi-Tenant & Subscription:** (`organizations`, `workspaces`, `memberships`, `users`, `subscription_plans`, `invoices`, `api_keys`, `webhooks`, `usage_logs`).
    3. **Sistem Inventory, Gudang & Sparepart Pabrik (ERP/MRP):** (`warehouses`, `locations`, `items_spareparts`, `categories`, `units`, `min_max_stock_rules`, `bill_of_quantities_boq`, `stock_movements`, `purchase_requests`, `suppliers`, `maintenance_work_orders`).
    4. **Keuangan, Kasir (POS) & Akuntansi Double-Entry:** (`accounts`, `journal_entries`, `ledger_transactions`, `outlets`, `pos_shifts`, `sales_receipts`, `taxes`).
    5. **Rumah Sakit, Klinik & Rekam Medis (SIMRS):** (`patients`, `doctors`, `polyclinics`, `appointments`, `medical_records`, `prescriptions`, `pharmacy_stocks`, `billing`).
    6. **Akademik, Sekolah & LMS (E-Learning):** (`students`, `instructors`, `courses`, `modules`, `lessons`, `enrollments`, `assignments`, `submissions`, `grades`, `certificates`).
    7. **Portal Berita, Blog & CMS / Social Media:** (`profiles`, `posts`, `tags`, `comments`, `likes`, `follows`, `notifications`, `media_assets`, `bookmarks`).

---

## 3. Referensi Arsitektur "1-File Instant SQL" (`database_full.sql`) — Siap Import Tanpa Error
Mesin `src/engines/sqlCompiler.ts` WAJIB menghasilkan **1 file `.sql` mandiri (Self-Contained Single File)** yang ketika di-upload ke phpMyAdmin, pgAdmin, DBeaver, atau Supabase SQL Editor langsung berjalan mulus dari baris pertama hingga akhir:
* **Aturan Struktur Urutan di Dalam 1 File `database_full.sql`:**
  1. **Header & Metadata Proyek:** Nama proyek, tanggal generate, dialek SQL, petunjuk cara pakai 3 langkah, dan komentar apresiasi halus **Saweria Karya Anak Bangsa**.
  2. **Safety Transaction & Environment Setup:**
     * *PostgreSQL/Supabase:* `BEGIN;`, `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`, `CREATE EXTENSION IF NOT EXISTS "pgcrypto";`.
     * *MySQL/MariaDB:* `SET FOREIGN_KEY_CHECKS = 0;`, `SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";`, `START TRANSACTION;`.
     * *SQLite:* `PRAGMA foreign_keys = ON;`.
  3. **Idempotent Clean-Up (Opsional via Toggle):** `DROP TABLE IF EXISTS ... CASCADE;` yang diurutkan dari tabel anak (*child*) ke tabel induk (*parent*) agar tidak pernah gagal karena *foreign key constraint*.
  4. **Custom Types & Enums:** Pembuatan `CREATE TYPE ... AS ENUM (...)` (untuk Postgres) atau `ENUM(...)` / `CHECK (...)` (untuk MySQL/SQLite/SQL Server).
  5. **DDL Pembuatan Tabel (`CREATE TABLE`):** Lengkap dengan `PRIMARY KEY`, tipe data presisi (`DECIMAL(18,2)` untuk uang, `TIMESTAMPTZ` untuk waktu, `JSONB` untuk metadata fleksibel), `NOT NULL`, `UNIQUE`, dan `DEFAULT`.
  6. **Relasi Antar Tabel (`FOREIGN KEY`):** Pengaturan eksplisit `ON DELETE CASCADE`, `ON DELETE RESTRICT`, atau `ON DELETE SET NULL` serta `ON UPDATE CASCADE`.
  7. **Optimasi Performa (`CREATE INDEX`):** Pembuatan *B-Tree Index*, *Composite Index* (gabungan beberapa kolom yang sering dicari), *GIN Index* (untuk pencarian JSONB/Full-Text di Postgres), dan *Unique Index*.
  8. **Otomasi Database (`TRIGGERS & FUNCTIONS`):** Fungsi dan trigger otomatis untuk memperbarui kolom `updated_at = CURRENT_TIMESTAMP` setiap kali ada baris yang di-edit, serta trigger pencatat `audit_logs` otomatis untuk standar korporasi.
  9. **Keamanan Tingkat Baris (`ROW LEVEL SECURITY / RLS`):** Khusus untuk pilihan PostgreSQL / Supabase, langsung sertakan `ALTER TABLE ... ENABLE ROW LEVEL SECURITY;` beserta `CREATE POLICY` dasar agar data antar user tidak bocor.
  10. **Data Awal Siap Uji (`INSERT INTO ...` Seed Data):** Menyertakan 5–10 baris data contoh yang realistis (misal: akun Admin default, contoh produk, kategori) dengan *password* yang sudah di-*hash* agar user yang mengimpor database bisa langsung mencoba aplikasinya detik itu juga!
  11. **Penutup Transaksi:** `COMMIT;` (dan pengembalian `SET FOREIGN_KEY_CHECKS = 1;` pada MySQL).

---

## 4. Referensi Standar Korporasi Besar & Kepatuhan Audit (Enterprise Database Patterns)
Untuk melayani programmer yang bekerja di perusahaan besar (Bank, BUMN, Korporasi Multinasional), **Mode Imajinasi Mikro** wajib menyediakan toggle fitur kelas enterprise berikut:
* **Soft Deletes Pattern:** Menambahkan kolom `deleted_at TIMESTAMPTZ NULL` dan `is_deleted BOOLEAN DEFAULT FALSE` beserta *Partial Index* (`WHERE deleted_at IS NULL`) agar data korporasi tidak pernah terhapus permanen secara tidak sengaja.
* **Full Audit Trail & Temporal History Columns:** Opsi menyisipkan kolom standar audit di seluruh tabel secara otomatis: `created_at`, `created_by`, `updated_at`, `updated_by`, `deleted_at`, `deleted_by`, dan `version INT DEFAULT 1` (untuk *Optimistic Locking* pencegah tabrakan edit data).
* **Multi-Tenancy Architecture:**
  * *Row-Level Tenancy:* Menyisipkan `tenant_id UUID NOT NULL` + *Composite Index* `(tenant_id, id)` di semua tabel bisnis.
  * *Schema-per-Tenant:* Opsi pemisahan `CREATE SCHEMA IF NOT EXISTS tenant_x;`.
* **Table Partitioning & Archiving (Skala Jutaan Baris):** Opsi `PARTITION BY RANGE (created_at)` untuk tabel transaksi besar atau log aktivitas.
* **Naming Convention Converter:** Tombol 1x klik untuk menyeragamkan seluruh nama tabel dan kolom agar sesuai standar perusahaan tempat user bekerja:
  * `snake_case` (Standar PostgreSQL/Laravel/Python — contoh: `order_items`)
  * `camelCase` (Standar JavaScript/Prisma — contoh: `orderItems`)
  * `PascalCase` (Standar C# .NET / SQL Server Enterprise — contoh: `OrderItems`)
  * Prefix Korporasi (contoh: menambahkan prefix `tbl_`, `mst_`, `trx_`, `log_` secara otomatis).

---

## 5. Referensi Dokumentasi Resmi Dialek SQL & Modern ORM (Target Export)
Mesin `src/engines/sqlCompiler.ts` wajib mematuhi aturan sintaks dari dokumentasi resmi masing-masing mesin database berikut:
* **Relational SQL Dialects (Output `.sql`):**
  * **PostgreSQL (v16/v17):** `https://www.postgresql.org/docs/current/sql-commands.html`
  * **Supabase SQL & RLS Policies:** `https://supabase.com/docs/guides/database/postgres/row-level-security`
  * **MySQL 8.0 / 8.4 & MariaDB:** `https://dev.mysql.com/doc/refman/8.4/en/sql-data-definition-statements.html` & `https://mariadb.com/kb/en/sql-statements-structure/`
  * **SQLite 3 (Serverless / Local / Turso LibSQL):** `https://www.sqlite.org/lang.html`
  * **Microsoft SQL Server (T-SQL untuk Korporasi):** `https://learn.microsoft.com/en-us/sql/t-sql/statements/statements`
* **Modern ORM & NoSQL Schema Exporters (Output File Konversi):**
  * **Prisma ORM (`schema.prisma`):** `https://www.prisma.io/docs/orm/reference/prisma-schema-reference`
  * **Drizzle ORM (`schema.ts`):** `https://orm.drizzle.team/docs/sql-schema-declaration`
  * **TypeORM / Sequelize Entities:** `https://typeorm.io/entities`
  * **Laravel Migrations (`database/migrations/*.php`):** `https://laravel.com/docs/migrations`
  * **MongoDB JSON Schema Validation:** `https://www.mongodb.com/docs/manual/core/schema-validation/`
  * **DBML (Database Markup Language `.dbml`):** `https://dbml.dbdiagram.io/docs/`