export async function searchBooks(query) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
    );
  
    const data = await response.json();
    return data.items || [];
  }