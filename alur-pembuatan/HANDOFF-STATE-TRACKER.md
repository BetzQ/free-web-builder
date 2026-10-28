# SISTEM PEMULIHAN SESI & HANDOFF ANTAR MODEL AI (STATE CHECKPOINT)
**Lokasi File Penyimpanan Progres:** `./alur-pembuatan/CURRENT-STATE.md` (Dibuat dan di-update otomatis oleh AI Agent secara berkala).
**Tujuan:** Memungkinkan transisi mulus ke model AI lain (Claude, GPT, Gemini, dll.) ketika model saat ini habis token, tanpa kehilangan konteks.

---

## 1. INSTRUKSI WAJIB UNTUK AI AGENT (SESSION STATE MANAGEMENT)
Setiap kali AI Agent menyelesaikan 1 FASE atau minimal setiap 30 menit pengerjaan koding, AI Agent **WAJIB memperbarui file `./alur-pembuatan/CURRENT-STATE.md`** dengan format di bawah ini. File ini menjadi "otak sambung" jika Anda harus mengganti model AI di tengah jalan.

---

## 2. TEMPLATE ISI FILE `CURRENT-STATE.md` (Contoh Format yang Di-update AI)
*(AI Agent akan otomatis mengisi bagian ini sesuai kondisi nyata kodingan)*

```markdown
# 🔄 PROYEK KONDISI TERAKHIR (HANDOFF CHECKPOINT)
- **Timestamp Terakhir:** [Tanggal & Jam]
- **Model AI Terakhir:** [Contoh: Nemotron 3 Ultra / OpenCode]
- **Status Proyek Keseluruhan:** [Contoh: FASE 3 Selesai (Database & Backend Engine Berjalan)]

## 📋 Checklist Fases Pengerjaan:
- [x] FASE 1: Inisialisasi Project, Tailwind, i18n 12 Bahasa, Light/Night Mode, & Integrasi QR Saweria (`./qr-saweria/qr-saweria.png`).
- [x] FASE 2: Data Statis (`presets-frontend.json`, `presets-backend.json`, `presets-database.json`, `hosting-tutorials.json`).
- [ ] FASE 3: Mesin Generator (CSS Token, SQL Compiler, Code Scaffolder, ZIP Bundler). ⟵ **(POSISI SAAT INI)**
- [ ] FASE 4: Studio Workspace UI (3 Mode: Default, Semi, Full Imajinasi) & Preview Interaktif.
- [ ] FASE 5: Halaman Tech Radar, Tutorial Hosting, & Final Production Build.

## 📂 File Utama yang Baru Saja Dibuat / Diedit:
1. `src/store/useStudioStore.ts` (Zustand state management selesai).
2. `src/components/layout/Navbar.tsx` (Tombol bahasa, tema, & tombol Saweria QR Code terintegrasi).

## ⚠️ Instruksi Khusus / Masalah yang Sedang Dihadapi (Penting untuk Model AI Pengganti):
- "Saat ini sedang menyusun fungsi `sqlCompiler.ts` untuk menangani Foreign Key relasi bertingkat pada PostgreSQL. Model baru harus melanjutkan pembuatan loop relasi tabel anak ke induk."

## 🚀 Perintah Lanjutan untuk Model AI Berikutnya:
- "Lanjutkan pembuatan file `src/engines/sqlCompiler.ts` baris 120, lalu buat komponen visual ER Diagram di `src/components/studio/database-builder/`."
```

---

## 3. CARA MELANJUTKAN KE MODEL AI LAIN KETIKA TOKEN HABIS
Jika token model Anda habis di tengah jalan:
1. Buka chat dengan model AI baru (misal: Claude 3.5 Sonnet atau GPT-4o).
2. Lampirkan atau ketik prompt pendek berikut:
   > *"Halo, token model AI saya sebelumnya habis. Tolong baca file `./alur-pembuatan/MASTER-PROMPT.md`, `./alur-pembuatan/REFERENSI-FRONTEND.md`, dan file status terakhir di `./alur-pembuatan/CURRENT-STATE.md`. Pahami posisi terakhir kita dan lanjutkan pengerjaan FASE berikutnya dari titik tersebut tanpa mengulang dari awal."*
3. AI baru akan langsung melanjutkan kodingan dengan presisi 100%!