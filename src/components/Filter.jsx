// Filter.jsx
import React from 'react';

function Filter({ filter, onFilterChange, searchTerm, onSearchChange }) {
    return (
        <div className="card filter flex flex-col gap-4 mb-6">
            <input
                type="text"
                id="searchBook"
                name="searchBook"
                placeholder="Cari judul atau penulis..."
                value={searchTerm}
                onChange={e => onSearchChange(e.target.value)}
                className="form-input"
            />
            <div className="flex gap-4 items-center">
                <label className="flex items-center gap-1 cursor-pointer">
                    <input
                        type="radio"
                        name="filter"
                        value="all"
                        checked={filter === 'all'}
                        onChange={() => onFilterChange('all')}
                        className="form-radio"
                    />
                    Semua
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                    <input
                        type="radio"
                        name="filter"
                        value="read"
                        checked={filter === 'read'}
                        onChange={() => onFilterChange('read')}
                        className="form-radio"
                    />
                    Sudah Dibaca
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                    <input
                        type="radio"
                        name="filter"
                        value="unread"
                        checked={filter === 'unread'}
                        onChange={() => onFilterChange('unread')}
                        className="form-radio"
                    />
                    Belum Dibaca
                </label>
            </div>
        </div>
    );
}

export default Filter;

// This component provides filtering and searching functionality for the book list.
// It allows users to filter books by read status and search by title or author.
// The filter options are displayed in a flex container with items aligned to the end.
// The `filter` prop determines the current filter state ('all', 'read', 'unread').
// The `onFilterChange` prop is a function to update the filter state.
// The `searchTerm` prop holds the current search term, and `onSearchChange` updates it.