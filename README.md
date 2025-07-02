# Manajemen Buku Pribadi

<p align="center">
  <img src="public/screenshot.png" alt="Screenshot Aplikasi Manajemen Buku Pribadi" width="600" />
</p>

<p align="center">
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-4.x-646CFF?logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black" alt="React" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-4.x-38BDF8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <img src="https://img.shields.io/badge/Neobrutalism%20UI-%23FFBF00?style=flat-square" alt="Neobrutalism UI" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License: MIT" />
</p>

---


Aplikasi **Manajemen Buku Pribadi** adalah aplikasi web untuk mencatat, mengelola, dan memantau koleksi buku bacaan Anda secara mudah dan modern. Dibangun dengan React dan Vite, serta mengusung tema UI Neobrutalism yang konsisten dan responsif.

## 📁 Struktur Direktori

```
book-manager/
├── public/                 # File statis (ikon, screenshot, dsb)
├── src/
│   ├── assets/             # Aset gambar/icon untuk aplikasi
│   ├── components/         # Komponen React (BookForm, Header, Footer, dsb)
│   ├── styles/             # CSS modular: base, layouts, components, utilities
│   ├── App.jsx             # Root komponen utama aplikasi
│   ├── main.jsx            # Entry point React
│   └── index.css           # Style global & Tailwind import
├── package.json            # Konfigurasi npm & dependencies
├── tailwind.config.js      # Konfigurasi Tailwind CSS
├── postcss.config.js       # Konfigurasi PostCSS
├── vite.config.js          # Konfigurasi Vite
└── README.md               # Dokumentasi project
```

**Penjelasan:**
- `public/` — Berisi file statis yang bisa diakses langsung browser (favicon, screenshot, dsb).
- `src/assets/` — Aset gambar/icon yang digunakan di aplikasi.
- `src/components/` — Semua komponen React modular (form, header, footer, dsb).
- `src/styles/` — Struktur CSS modular: base (variabel, reset), layouts, components, utilities.
- `src/App.jsx` — Komponen utama yang mengatur seluruh flow aplikasi.
- `src/main.jsx` — Entry point React, mounting ke DOM.
- `src/index.css` — Style global, import Tailwind dan custom CSS.
- `package.json` — Daftar dependencies dan script npm.
- `tailwind.config.js`, `postcss.config.js`, `vite.config.js` — Konfigurasi tools build dan styling.
- `README.md` — Dokumentasi project ini.

## ✨ Fitur Utama
- Tambah, edit, dan hapus data buku
- Filter dan pencarian buku (judul/penulis)
- Tandai status "Sudah Dibaca" atau "Belum Dibaca"
- Notifikasi interaktif untuk aksi CRUD
- Data tersimpan di localStorage (persisten)
- UI modern, responsif, dan konsisten (Neobrutalism)

## 🧩 Contoh Kode: Membuat Komponen Baru

Misal ingin membuat komponen alert sederhana:

### 1. Komponen React: `src/components/Alert.jsx`
```jsx
function Alert({ type = 'info', children }) {
  return (
    <div className={`alert alert-${type}`}>{children}</div>
  );
}

export default Alert;
```

### 2. Style Modular: `src/styles/components/_alert.css`
```css
.alert {
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
  font-weight: 500;
  box-shadow: var(--shadow-md);
}
.alert-info {
  background: #e0f2fe;
  color: #0369a1;
  border: 2px solid #0369a1;
}
.alert-success {
  background: #dcfce7;
  color: #166534;
  border: 2px solid #22c55e;
}
.alert-error {
  background: #fee2e2;
  color: #b91c1c;
  border: 2px solid #ef4444;
}
```

### 3. Import Style di `src/styles/main.css`
```css
@import './components/_alert.css';
```

### 4. Cara Pakai di Komponen Lain
```jsx
import Alert from './components/Alert';

function Example() {
  return (
    <div>
      <Alert type="success">Data berhasil disimpan!</Alert>
      <Alert type="error">Terjadi kesalahan!</Alert>
    </div>
  );
}
```

Dengan pola ini, setiap komponen baru tetap modular, konsisten, dan mudah di-maintain.

## 🛠️ Teknologi & Library
- [React](https://react.dev/) — Library utama untuk UI
- [Vite](https://vitejs.dev/) — Build tool super cepat
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- **Custom Neobrutalism CSS** — Variabel, shadow, border, dan card style
- [ESLint](https://eslint.org/) — Linter untuk menjaga kualitas kode
- [PostCSS](https://postcss.org/) — Untuk proses CSS

## 🚀 Cara Instalasi & Menjalankan
1. Clone repo ini:
   ```bash
   git clone <repo-url>
   cd book-manager
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan aplikasi:
   ```bash
   npm run dev
   ```
4. Buka di browser: [http://localhost:5173](http://localhost:5173)

## 💡 Inspirasi & Referensi
- Showcase Neobrutalism: [neobrutalism.dev/showcase](https://www.neobrutalism.dev/showcase)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

