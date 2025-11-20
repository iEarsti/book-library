import React from "react";
import { useNavigate } from "react-router-dom";
import { useLibraryStore } from "../store/useLibraryStore";

export default function BookCard({ book }) {
  const navigate = useNavigate();

  const addToRead = useLibraryStore((s) => s.addToRead);
  const addToWishlist = useLibraryStore((s) => s.addToWishlist);
  const removeFromRead = useLibraryStore((s) => s.removeFromRead);
  const removeFromWishlist = useLibraryStore((s) => s.removeFromWishlist);

  const isInRead = useLibraryStore((s) =>
    s.read.some((b) => b.id === book.id)
  );
  const isInWishlist = useLibraryStore((s) =>
    s.wishlist.some((b) => b.id === book.id)
  );

  return (
    <div className="book-card">
      {book.thumbnail && <img src={book.thumbnail} alt={book.title} />}

      <h3>{book.title}</h3>
      <p>{book.authors?.join(", ")}</p>

      <div className="book-card-buttons">
        {isInRead ? (
          <button onClick={() => removeFromRead(book.id)}>− Прочитано</button>
        ) : (
          <button onClick={() => addToRead(book)}>+ Прочитано</button>
        )}

        {isInWishlist ? (
          <button onClick={() => removeFromWishlist(book.id)}>− Wishlist</button>
        ) : (
          <button onClick={() => addToWishlist(book)}>+ Wishlist</button>
        )}

        <button onClick={() => navigate(`/book/${book.id}`)}>Деталі</button>
      </div>
    </div>
  );
}
