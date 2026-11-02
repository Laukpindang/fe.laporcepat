# LAPORCEPAT

Website untuk Pemerintah Kabupaten Bandung yang memerlukan mekanisme digital agar masyarakat dapat menyampaikan pengaduan fasilitas umum secara mudah sekaligus memungkinkan pemerintah melakukan pencatatan, verifikasi, disposisi, pemantauan, dan penyelesaian pengaduan secara terstruktur.

![Document](https://docs.google.com/document/d/1rODBiKBegJ3ZofQ6ZP6qWMmHcu6V6N8Ee2IOpfG4WTU/edit?usp=sharing)

## Fitur
- Registrasi dan Login pengguna
- Formulir Pengaduan
- Pelacakan Laporan Pengaduan (pengguna & petugas)
- Dashboard Petugas
- Dashboard SLA
- Manajemen Data (untuk admin)
- [Other feature]

## Tech Stack
- Framework: Next.js

## Getting Started <in_construction>

### Prerequisites
- Node.js 20+

### Installation
```
git clone <repo-url>
cd project-folder
npm install
cp .env.example .env
npm start
```

Then open http://localhost:3000

### Demo account
#### admin
email: admin@laporcepat.com
pw: admin123
#### petugas
email: petugas@laporcepat.com
pw: petugas123
#### user
email: - (bebas)
pw: - (bebas)
## Project Structure 
- public/data/          - JSON datas
- src/
-   app/           - App Route
-   components/    - Shadcn & Custom Component
-   const/         - Constant datas & types
-   hooks/         - Custom hooks
-   lib/           - functions

## Known Issues <in_construction>
1. Data tiruan (mock) masih tersebar dan terdesentralisasi, sehingga mengalami kesulitan dalam refactor untuk melakukan koneksi pada _single source_ data di foltder public/data
2. Fetch tidak diberlakukan secara menyeluruh, diakibatkan dari poin (1)
3. Mekanisme Daftar Masuk akun belum diimplementasi

## Credits <in_construction>
- Libraries, tutorials, or tools used
### Libraries
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn](https://ui.shadcn.com/)
- [lucide-react](https://lucide.dev/guide/react/)
