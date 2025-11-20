export function normalizeBook(volume) {
    const id = volume.id;
    const info = volume.volumeInfo || {};
    const rawDescription = info.description || info.subtitle || "";
    const description = rawDescription.replace(/<\/?[^>]+(>|$)/g, "");
  
    return {
      id,
      title: info.title || "Без назви",
      authors: info.authors || ["Невідомий"],
      thumbnail:
        (info.imageLinks && (info.imageLinks.thumbnail || info.imageLinks.smallThumbnail)) ||
        null,
      description,
    };
  }
  