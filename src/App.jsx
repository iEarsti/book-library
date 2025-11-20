import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import ReadPage from "./pages/ReadPage";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <>
      <nav className="nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/read">Прочитано</Link>
        <Link className="nav-link" to="/wishlist">Хочу прочитати</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/read" element={<ReadPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </>
  );
}

export default App;
