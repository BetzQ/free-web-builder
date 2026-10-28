# DOKUMEN REFERENSI UTAMA: ARSITEKTUR & KEAMANAN BACKEND BUILDER
**Lokasi File:** `./alur-pembuatan/REFERENSI-BACKEND.md`
**Tujuan untuk AI Agent:** Gunakan daftar URL, standar keamanan, dan pola arsitektur di bawah ini sebagai cetak biru (blueprint) untuk membangun **Modul Backend Security & Architecture Studio** (3 Mode: Default, Semi-Custom, dan Full Imajinasi Mikro) beserta mesin generator kode di `src/engines/codeScaffolder.ts`.

---

## 1. Referensi UI Visual Backend Builder & Project Initializer (Inspirasi Klik-Klik)
Gunakan situs-situs ini sebagai acuan bagaimana orang awam maupun programmer senior bisa merancang Backend hanya dengan klik-klik tombol, memilih modul, dan mengatur konfigurasi mikro:
* **Spring Initializr** — `https://start.spring.io/`
  * *Apa yang diambil:* Tata letak pemilihan *Project Metadata* (Bahasa, Framework, Versi, Packaging) dan panel **Add Dependencies / Modules** yang bersih dan cepat untuk **Mode Default & Semi-Custom**.
* **Amplication (Open-Source Backend Generator)** — `https://amplication.com/` & `https://docs.amplication.com/`
  * *Apa yang diambil:* Konsep *Visual Backend Builder* di mana user bisa mengaktifkan plugin autentikasi, mengatur *Role & Permissions* (RBAC) lewat tabel matriks visual, memilih arsitektur (Monolith vs Microservices), lalu mengunduh *source code* siap pakai.
* **Encore.dev (Visual Backend Architecture)** — `https://encore.dev/`
  * *Apa yang diambil:* Visualisasi diagram alur layanan Backend (*Service-to-Service Flow*, API Endpoints, Cron Jobs, Pub/Sub, dan Middleware Keamanan) secara interaktif di layar preview.
* **Supabase Dashboard (Auth & Policies UI)** — `https://supabase.com/docs/guides/auth`
  * *Apa yang diambil:* Tampilan *toggle switch* yang sangat ramah orang awam untuk mengaktifkan *Email Login, OAuth Providers (Google/GitHub), Rate Limits,* dan *Security Policies*.
* **Swagger Editor / Scalar API Reference** — `https://editor.swagger.io/` & `https://scalar.com/`
  * *Apa yang diambil:* Tampilan *Live Preview* khusus Backend (menampilkan daftar Endpoint `GET`, `POST`, `PUT`, `DELETE`, status gembok keamanan, serta contoh *Request/Response JSON* secara real-time saat user mengubah pengaturan).

---

## 2. Referensi Standar Keamanan Tertinggi (Ultra-Secure Shield & OWASP Standards)
Seluruh output kode Backend (baik di Mode Default maupun Mode Imajinasi Mikro) WAJIB mematuhi standar pertahanan siber internasional berikut:
* **OWASP Top 10 (Web Application Security Risks)** — `https://owasp.org/www-project-top-ten/`
  * *Apa yang diambil:* Pencegahan bawaan untuk *Broken Access Control, Cryptographic Failures, Injection (SQLi/NoSQLi/XSS), Insecure Design,* dan *Server-Side Request Forgery (SSRF)*.
* **OWASP Cheat Sheet Series** — `https://cheatsheetseries.owasp.org/`
  * *Referensi Spesifik yang Wajib Diterapkan di Generator Kode:*
    * *Authentication Cheat Sheet:* `https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html`
    * *REST Security Cheat Sheet:* `https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html`
    * *Password Storage Cheat Sheet:* `https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html`
    * *Cross-Site Request Forgery (CSRF) Prevention:* `https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html`
    * *Input Validation Cheat Sheet:* `https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html`
* **Helmet.js & Secure HTTP Headers** — `https://helmetjs.github.io/` & **MDN HTTP Observatory** — `https://developer.mozilla.org/en-US/observatory`
  * *Apa yang diambil:* Generator otomatis HTTP Security Headers (`Content-Security-Policy`, `Strict-Transport-Security (HSTS)`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, dan `Permissions-Policy`).

---

## 3. Referensi Autentikasi, Otorisasi & Kontrol Akses (Auth, RBAC, & ABAC)
Gunakan referensi ini untuk membangun panel pengaturan *Identity & Access Management* di **Mode Imajinasi Mikro**:
* **Better-Auth & Auth.js** — `https://www.better-auth.com/` & `https://authjs.dev/`
  * *Apa yang diambil:* Struktur arsitektur autentikasi modern: *Session-based vs Stateless JWT*, *Access Token (15m) + Refresh Token Rotation (7d) dengan Reuse Detection*, serta *Multi-Session Management*.
* **OAuth 2.0 & OpenID Connect (OIDC)** — `https://oauth.net/2/` & `https://openid.net/developers/how-connect-works/`
  * *Apa yang diambil:* Alur *Authorization Code Flow with PKCE* untuk integrasi login sosial (Google, GitHub, Microsoft Azure AD, Apple) dan SSO Korporasi.
* **WebAuthn / Passkeys & TOTP 2FA** — `https://webauthn.guide/` & `https://simplewebauthn.dev/`
  * *Apa yang diambil:* Opsi autentikasi tanpa password (*Biometric/Passkeys*) dan kode *Two-Factor Authentication (2FA)* menggunakan aplikasi Authenticator (TOTP RFC 6238).
* **Casbin & Oso (RBAC & ABAC Authorization Engine)** — `https://casbin.org/` & `https://www.osohq.com/academy`
  * *Apa yang diambil:* Matriks hak akses visual di mana user bisa memilih:
    * **RBAC (Role-Based Access Control):** Mengatur peran (`SuperAdmin`, `Manager`, `Editor`, `Staff`, `Customer`) beserta izin aksi (`create`, `read`, `update`, `delete`, `export`, `approve`).
    * **ABAC (Attribute-Based Access Control):** Aturan kondisional mikro untuk perusahaan besar (contoh: *"Hanya bisa mengedit data jika `user.department == resource.department` DAN dilakukan pada jam kerja"*).

---

## 4. Referensi Pertahanan Server Mikro (Rate Limiting, Kriptografi, & Validasi Input)
Panel kustomisasi mikro harus mengizinkan user mengatur parameter matematis dan teknis dari komponen berikut:
* **Algoritma Rate Limiting & Anti-DDoS:**
  * **IETF RateLimit Header Specs & Upstash Rate Limit** — `https://upstash.com/docs/redis/sdks/ratelimit-ts/algorithms` & `https://express-rate-limit.mintlify.app/`
  * *Apa yang diambil:* Pilihan algoritma (*Fixed Window, Sliding Window Log, Sliding Window Counter, Token Bucket*), pengaturan kuota per IP vs per User ID, pengaturan batas khusus di endpoint sensitif (`/login` maks 5x per 15 menit, `/api/*` maks 100x per menit), serta pengiriman header `X-RateLimit-Remaining` dan `Retry-After`.
* **Kriptografi, Hashing & Enkripsi Data Sensitif:**
  * **Argon2 (Pemenang Password Hashing Competition)** — `https://github.com/P-H-C/phc-winner-argon2`
  * **NIST AES-GCM Standard** — `https://csrc.nist.gov/pubs/sp/800/38/d/final`
  * *Apa yang diambil:* Slider pengaturan parameter hashing di Mode Imajinasi: pilihan algoritma (`Argon2id`, `Bcrypt`, `Scrypt`, `PBKDF2`), pengaturan *Memory Cost* (misal `64 MB`), *Time Cost / Iterations*, *Parallelism*, serta enkripsi kolom sensitif di tingkat aplikasi menggunakan `AES-256-GCM` dengan *Key Rotation*.
* **Skema Validasi & Sanitasi Input Ketat (Zero-Trust Input):**
  * **Zod (TypeScript)** — `https://zod.dev/`
  * **Pydantic (Python)** — `https://docs.pydantic.dev/`
  * **Go Playground Validator (Golang)** — `https://github.com/go-playground/validator`
  * *Apa yang diambil:* Pembuatan lapisan validasi otomatis di setiap endpoint API untuk menolak payload mencurigakan, membersihkan tag HTML berbahaya (Anti-XSS), dan membatasi ukuran maksimal body JSON/Upload file.

---

## 5. Referensi Pola Arsitektur Backend (Dari Startup Kecil hingga Enterprise)
Agar user bisa memilih struktur folder Backend yang sesuai dengan skala tim mereka:
* **The Twelve-Factor App** — `https://12factor.net/`
  * *Apa yang diambil:* Standar pemisahan konfigurasi (`.env`), *stateless processes*, *port binding*, dan *disposability*.
* **Clean Architecture & Hexagonal Architecture (Ports and Adapters):**
  * `https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html`
  * `https://alistair.cockburn.us/hexagonal-architecture/`
  * *Apa yang diambil:* Struktur pemisahan folder yang rapi antara `domain/` (entitas bisnis murni), `application/use-cases/` (logika aplikasi), `interfaces/controllers/` (HTTP handlers), dan `infrastructure/repositories/` (database & pihak ketiga).
* **Modular Monolith vs Microservices Patterns:**
  * `https://microservices.io/patterns/index.html` & `https://www.kamilgrzybek.com/blog/posts/modular-monolith-primer`
  * *Apa yang diambil:* Opsi struktur *Single Deployable Unit* (cocok untuk Startup/UMKM agar hemat biaya server) vs *Multi-Service Architecture* (cocok untuk Korporasi Besar).

---

## 6. Referensi Integrasi Korporasi Besar (Enterprise Adapter, Audit Log, & Kontrak API)
Agar kode Backend yang di-generate oleh web kita bisa langsung dipakai atau disambungkan ke sistem raksasa milik perusahaan besar (Bank, BUMN, Multinasional):
* **OpenAPI 3.1.0 Specification (Standar Kontrak API Global)** — `https://spec.openapis.org/oas/v3.1.0`
  * *Apa yang diambil:* Generator file `openapi.yaml` / `swagger.json` otomatis. Perusahaan besar cukup mengimpor 1 file ini ke **API Gateway** mereka (seperti Kong, Apigee, atau AWS API Gateway) untuk menyambungkan layanan baru ke sistem utama.
* **Enterprise Reliability & Security Extras:**
  * **Idempotency Keys (IETF Draft & Stripe Pattern)** — `https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/` & `https://docs.stripe.com/api/idempotent_requests` (Mencegah transaksi/pembayaran terproses dua kali saat koneksi user terputus).
  * **Standard Webhooks & HMAC Signature Verification** — `https://www.standardwebhooks.com/` (Standar keamanan verifikasi tanda tangan kriptografi `HMAC-SHA256` saat menerima notifikasi dari Payment Gateway seperti Midtrans, Xendit, atau Stripe).
  * **OpenTelemetry & Structured Audit Logging** — `https://opentelemetry.io/docs/` (Format pencatatan *Audit Trail* berstandar JSON: mencatat `actor_id`, `ip_address`, `action`, `resource_id`, `before_value`, `after_value`, dan `timestamp` untuk kepatuhan audit ISO 27001 / perbankan).
  * **Health Checks (Kubernetes Liveness & Readiness Probes)** — Endpoint `/health/live` dan `/health/ready` bawaan agar siap dimasukkan ke klaster Docker / Kubernetes perusahaan besar.

---

## 7. Referensi Dokumentasi Multi-Bahasa & Framework Backend (Target Export Code)
Mesin `codeScaffolder.ts` WAJIB menghasilkan struktur folder, middleware keamanan, dan *routing* yang 100% valid mengikuti dokumentasi resmi berikut:
* **Node.js / TypeScript Ecosystem:**
  * **Express.js:** `https://expressjs.com/en/advanced/best-practice-security.html`
  * **NestJS (Enterprise Node):** `https://docs.nestjs.com/security/authentication`
  * **Fastify (High Performance):** `https://fastify.dev/docs/latest/`
  * **Hono (Edge / Serverless):** `https://hono.dev/docs/`
* **Python Ecosystem:**
  * **FastAPI:** `https://fastapi.tiangolo.com/tutorial/security/`
  * **Django & Django REST Framework:** `https://docs.djangoproject.com/en/stable/topics/security/` & `https://www.django-rest-framework.org/`
  * **Flask:** `https://flask.palletsprojects.com/`
* **Go (Golang) Ecosystem:**
  * **Gin Web Framework:** `https://gin-gonic.com/docs/`
  * **Fiber:** `https://docs.gofiber.io/`
* **PHP Ecosystem:**
  * **Laravel (Standard & API Architecture):** `https://laravel.com/docs/security`
* **Rust Ecosystem:**
  * **Axum (Tokio Stack):** `https://docs.rs/axum/latest/axum/`
* **Enterprise JVM & Microsoft Ecosystem:**
  * **Java Spring Boot 3 + Spring Security 6:** `https://docs.spring.io/spring-security/reference/index.html`
  * **C# ASP.NET Core Web API:** `https://learn.microsoft.com/en-us/aspnet/core/security/`