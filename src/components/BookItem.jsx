// BookItem.jsx
function BookItem({ book, onUpdate, onDelete, onEdit }) {
    const toggleReadStatus = () => {
        onUpdate(book.id, {
            ...book,
            isRead: !book.isRead
        });
    };

    return (
        <li className="book-item" style={{
            marginBottom: '1rem',
            backgroundColor: 'white',
            transition: 'transform 0.2s ease'
        }}>
            <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                    <h3 style={{
                        fontSize: '1.25rem',
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-heading)'
                    }}>{book.title}</h3>
                    <p style={{ color: '#666' }}>Oleh: {book.author}</p>
                    <p style={{ fontSize: '0.9rem', color: '#888' }}>
                        Ditambahkan: {book.addedDate}
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    gap: '0.75rem',
                    flexWrap: 'wrap'
                }}>
                    <button
                        onClick={toggleReadStatus}
                        style={{
                            backgroundColor: book.isRead ? 'var(--accent)' : '#94a3b8',
                            fontSize: '0.9rem'
                        }}
                    >
                        {book.isRead ? '✓ Sudah Dibaca' : '○ Belum Dibaca'}
                    </button>
                    <button
                        onClick={() => onEdit(book)}
                        style={{
                            backgroundColor: '#fbbf24',
                            fontSize: '0.9rem'
                        }}
                    >
                        ✎ Edit
                    </button>
                    <button
                        onClick={() => onDelete(book.id)}
                        style={{
                            backgroundColor: 'var(--main)',
                            fontSize: '0.9rem'
                        }}
                    >
                        🗑 Hapus
                    </button>
                </div>
            </div>
        </li>
    );
}
export default BookItem;
// This component represents a single book item in the list.
// It displays the book's title, author, and added date.
// It also provides buttons to toggle the read status and delete the book.
// The `onUpdate` prop is a function to update the book's read status.
// The `onDelete` prop is a function to delete the book from the list.
// The `onEdit` prop is a function to edit the book details.