import React from "react";
import { useLibraryStore } from "../store/useLibraryStore";
import BookCard from "../components/BookCard";

export default function ReadPage() {
  const read = useLibraryStore((s) => s.read);

  if (!read.length)
    return <p className="empty-message">Список прочитаних порожній.</p>;

  return (
    <div className="page">
      <h1 className="page-title">Прочитано</h1>
      <div className="book-grid">
        {read.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </div>
  );
}
