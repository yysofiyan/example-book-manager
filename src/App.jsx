import { useState, useEffect } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Filter from './components/Filter';
import Notification from './components/Notification';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/main.css';

/**
 * Komponen utama aplikasi Manajemen Buku Pribadi.
 * 
 * State yang dikelola:
 * - books: Array yang menyimpan daftar buku
 * - filter: String untuk memfilter buku (all/read/unread)
 * - searchTerm: String untuk pencarian buku
 * - notification: String untuk menampilkan pesan notifikasi
 * - editingBook: Object yang menyimpan data buku yang sedang diedit
 * 
 * Fitur utama:
 * - Menyimpan dan memuat data buku dari localStorage
 * - Menambah buku baru
 * - Mengedit data buku yang ada
 * - Menghapus buku dengan konfirmasi
 * - Memfilter buku berdasarkan status baca
 * - Mencari buku berdasarkan judul atau penulis
 * - Menampilkan notifikasi untuk setiap aksi
 * 
 * Komponen yang digunakan:
 * - BookForm: Form untuk menambah/edit buku
 * - Filter: Komponen untuk filter dan pencarian
 * - BookList: Menampilkan daftar buku
 * - Notification: Menampilkan pesan notifikasi
 * 
 * @returns {JSX.Element} Komponen React untuk aplikasi manajemen buku
 */
function App() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState(null);
  const [editingBook, setEditingBook] = useState(null);

  /**
   * Memuat data buku yang tersimpan dari localStorage saat komponen dimuat
   */
  useEffect(() => {
    const savedBooks = localStorage.getItem('my-books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }
  }, []);

  /**
   * Menyimpan data buku ke localStorage setiap kali state books berubah
   */
  useEffect(() => {
    localStorage.setItem('my-books', JSON.stringify(books));
  }, [books]);

  /**
   * Menambahkan buku baru ke dalam koleksi
   * @param {Object} newBook - Objek buku yang akan ditambahkan
   */
  const addBook = (newBook) => {
    setBooks([...books, {
      ...newBook,
      id: Date.now().toString(),
      addedDate: new Date().toLocaleDateString()
    }]);
    showNotification(`Buku "${newBook.title}" berhasil ditambahkan!`);
  };

  /**
   * Mengatur buku yang akan diedit
   * @param {Object} book - Buku yang akan diedit
   */
  const startEditBook = (book) => {
    setEditingBook(book);
  };

  /**
   * Menyimpan perubahan pada buku yang diedit
   * @param {Object} updatedBook - Data buku yang telah diperbarui
   */
  const saveEditBook = (updatedBook) => {
    setBooks(books.map(book =>
      book.id === editingBook.id ? { ...book, ...updatedBook } : book
    ));
    showNotification(`Buku "${updatedBook.title}" berhasil diperbarui!`);
    setEditingBook(null);
  };

  /**
   * Memperbarui detail buku
   * @param {string} id - ID buku yang akan diperbarui
   * @param {Object} updatedBook - Data buku yang telah diperbarui
   */
  const updateBook = (id, updatedBook) => {
    setBooks(books.map(book =>
      book.id === id ? { ...book, ...updatedBook } : book
    ));
    showNotification(`Buku "${updatedBook.title}" berhasil diperbarui!`);
  };

  /**
   * Menghapus buku dengan dialog konfirmasi
   * @param {string} id - ID buku yang akan dihapus
   */
  const deleteBook = (id) => {
    const bookToDelete = books.find(book => book.id === id);
    if (!bookToDelete) return;

    const confirmBox = document.createElement('div');
    confirmBox.className = 'fixed inset-0 bg-black bg-opacity-35 flex items-center justify-center z-50';
    confirmBox.innerHTML = `
      <div class="bg-white p-8 rounded-xl shadow-xl max-w-[90vw] w-[350px] text-center">
        <div class="text-xl font-semibold text-red-500 mb-4">Konfirmasi Hapus Buku</div>
        <div class="mb-6 text-gray-800">Apakah Anda yakin ingin menghapus <b>${bookToDelete.title}</b>?</div>
        <button id="confirmDeleteBtn" 
          class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold mr-3 transition-colors">
          Ya, Hapus
        </button>
        <button id="cancelDeleteBtn" 
          class="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
          Batal
        </button>
      </div>
    `;
    document.body.appendChild(confirmBox);
    document.getElementById('confirmDeleteBtn').onclick = () => {
      setBooks(books.filter(book => book.id !== id));
      showNotification(`Buku \"${bookToDelete.title}\" berhasil dihapus!`);
      document.body.removeChild(confirmBox);
    };
    document.getElementById('cancelDeleteBtn').onclick = () => {
      document.body.removeChild(confirmBox);
    };
  };

  /**
   * Menampilkan pesan notifikasi yang hilang secara otomatis
   * @param {string} message - Pesan notifikasi yang akan ditampilkan
   */
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  /**
   * Memfilter buku berdasarkan status baca dan kata kunci pencarian
   * @returns {Array} Array buku yang telah difilter
   */
  const filteredBooks = books.filter(book => {
    const matchesFilter = filter === 'all' ||
      (filter === 'read' && book.isRead) ||
      (filter === 'unread' && !book.isRead);

    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="app">
      <Header />
      <BookForm
        onSubmit={editingBook ? saveEditBook : addBook}
        editingBook={editingBook}
        onCancelEdit={() => setEditingBook(null)}
      />

      <Filter
        filter={filter}
        onFilterChange={setFilter}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <BookList
        books={filteredBooks}
        onUpdate={updateBook}
        onDelete={deleteBook}
        onEdit={startEditBook}
      />

      <Notification message={notification} />
      <Footer />
    </div>
  );
}

export default App;