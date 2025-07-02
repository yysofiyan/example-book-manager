// BookList.jsx
import BookItem from './BookItem';

function BookList({ books, onUpdate, onDelete, onEdit }) {
    return (
        <div className="book-list">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem'
            }}>
                <h2 style={{
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-heading)'
                }}>Daftar Buku</h2>
                <span style={{
                    backgroundColor: 'var(--main)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                }}>{books.length} Buku</span>
            </div>

            {books.length === 0 ? (
                <div style={{
                    textAlign: 'center',
                    padding: '2rem',
                    backgroundColor: 'var(--secondary-background)',
                    borderRadius: '8px'
                }}>
                    <p style={{ fontSize: '1.1rem' }}>Tidak ada buku yang ditemukan.</p>
                </div>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {books.map(book => (
                        <BookItem
                            key={book.id}
                            book={book}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BookList;