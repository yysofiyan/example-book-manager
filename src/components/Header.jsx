/**
 * Komponen header aplikasi.
 * 
 * Menampilkan judul aplikasi "Manajemen Buku Pribadi".
 */
function Header() {
  return (
    <header className="card header flex flex-col items-center gap-1 mb-6">
      <h1 className="header-title font-heading text-3xl md:text-4xl uppercase tracking-wide text-primary mb-1">Manajemen Buku Pribadi</h1>
      <p className="header-subtitle text-base md:text-lg text-gray-600">Kelola koleksi bacaanmu dengan mudah</p>
    </header>
  );
}

export default Header;