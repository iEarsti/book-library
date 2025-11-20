import React, { useState } from "react";
import { searchBooks } from "../services/googleBooks";
import { normalizeBook } from "../utils/normalizeBook";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(query) {
    setLoading(true);
    const results = await searchBooks(query);
    const normalized = results.map(normalizeBook);
    setBooks(normalized);
    setLoading(false);
  }

  return (
    <div className="page">
      <h1 className="page-title">Пошук книг</h1>

      <SearchBar onSearch={handleSearch} />
      {books.length === 0 && !loading && (
          <p className="empty-message">Результати відсутні</p>
        )}
      {loading && <p className="loading-message">Завантаження...</p>}
      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
