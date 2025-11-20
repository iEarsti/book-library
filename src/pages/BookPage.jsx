import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLibraryStore } from "../store/useLibraryStore";
import { normalizeBook } from "../utils/normalizeBook";

export default function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBook() {
      setLoading(true);
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      const data = await res.json();
      setBook(normalizeBook(data));
      setLoading(false);
    }

    fetchBook();
  }, [id]);

  if (loading) return <p className="loading-message">Завантаження книги...</p>;
  if (!book) return <p className="empty-message">Книга не знайдена</p>;

  return (
    <div className="page book-page">
      <h1 className="page-title">{book.title}</h1>
      <p className="book-authors">Автори: {book.authors.join(", ")}</p>

      {book.thumbnail && (
        <img className="book-thumbnail" src={book.thumbnail} alt={book.title} />
      )}

      <p className="book-description">{book.description}</p>

    </div>
  );
}
