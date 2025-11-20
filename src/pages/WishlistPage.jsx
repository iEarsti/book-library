import React from "react";
import { useLibraryStore } from "../store/useLibraryStore";
import BookCard from "../components/BookCard";

export default function WishlistPage() {
  const wishlist = useLibraryStore((s) => s.wishlist);

  if (!wishlist.length)
    return <p className="empty-message">Список «Хочу прочитати» порожній.</p>;

  return (
    <div className="page">
      <h1 className="page-title">Хочу прочитати</h1>
      <div className="book-grid">
        {wishlist.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </div>
  );
}
