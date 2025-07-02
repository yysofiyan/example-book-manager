import { useState, useEffect } from 'react';

/**
 * Komponen BookForm
 * Komponen formulir untuk menambah dan mengedit entri buku
 * 
 * @param {Object} props
 * @param {Function} props.onSubmit - Fungsi handler yang dipanggil ketika formulir dikirim
 * @param {Object} props.editingBook - Objek buku yang sedang diedit (null ketika menambah buku baru)
 * @param {Function} props.onCancelEdit - Fungsi handler yang dipanggil ketika edit dibatalkan
 */
function BookForm({ onSubmit, editingBook, onCancelEdit }) {
    // State untuk field formulir
    const [title, setTitle] = useState(editingBook ? editingBook.title : '');
    const [author, setAuthor] = useState(editingBook ? editingBook.author : '');
    const [isRead, setIsRead] = useState(editingBook ? editingBook.isRead : false);

    /**
     * Effect untuk memperbarui state formulir ketika editingBook berubah
     * Mengatur ulang field formulir ketika beralih antara mode tambah/edit
     */
    useEffect(() => {
        if (editingBook) {
            setTitle(editingBook.title || '');
            setAuthor(editingBook.author || '');
            setIsRead(!!editingBook.isRead);
        } else {
            setTitle('');
            setAuthor('');
            setIsRead(false);
        }
    }, [editingBook]);

    /**
     * Menangani pengiriman formulir
     * Memvalidasi field yang diperlukan dan memanggil onSubmit dengan data formulir
     * 
     * @param {Event} e - Event pengiriman formulir
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !author.trim()) return;
        onSubmit({ title, author, isRead });
        if (!editingBook) {
            setTitle('');
            setAuthor('');
            setIsRead(false);
        }
    };

    return (
        <form className="card book-form flex flex-col gap-6" onSubmit={handleSubmit}>
            <h2 className="font-heading text-2xl md:text-3xl mb-2 text-left uppercase tracking-wide text-black">
                {editingBook ? 'Edit Buku' : 'Tambah Buku Baru'}
            </h2>
            <div className="flex flex-col gap-2">
                <label htmlFor="bookTitle" className="form-label">Judul Buku</label>
                <input
                    type="text"
                    placeholder="Masukkan judul buku"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                    id="bookTitle"
                    name="bookTitle"
                    className="form-input"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bookAuthor" className="form-label">Penulis</label>
                <input
                    type="text"
                    placeholder="Masukkan nama penulis"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    required
                    id="bookAuthor"
                    name="bookAuthor"
                    className="form-input"
                />
            </div>
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={isRead}
                    onChange={e => setIsRead(e.target.checked)}
                    id="isRead"
                    name="isRead"
                    className="form-checkbox"
                />
                <label htmlFor="isRead" className="text-base font-medium cursor-pointer select-none">Sudah Dibaca</label>
            </div>
            <div className="flex gap-3 justify-end mt-2">
                {editingBook && (
                    <button
                        type="button"
                        onClick={onCancelEdit}
                        className="bg-slate-400 hover:bg-slate-500 text-white px-4 py-2 rounded font-semibold transition-colors"
                    >
                        Batal
                    </button>
                )}
                <button
                    type="submit"
                    className="bg-primary hover:bg-red-600 text-white px-6 py-2 rounded font-semibold shadow-md transition-colors"
                >
                    {editingBook ? 'Simpan Perubahan' : 'Tambah Buku'}
                </button>
            </div>
        </form>
    );
}

export default BookForm;
