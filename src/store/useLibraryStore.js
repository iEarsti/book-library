import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLibraryStore = create(
  persist(
    (set, get) => ({
      read: [],
      wishlist: [],

      addToRead: (book) =>
        set((state) => {
          const already = state.read.some((b) => b.id === book.id);
          if (already) return state;
          return {
            read: [...state.read, book],
            wishlist: state.wishlist.filter((b) => b.id !== book.id),
          };
        }),

      removeFromRead: (id) =>
        set((state) => ({ read: state.read.filter((b) => b.id !== id) })),
        
        addToWishlist: (book) =>
        set((state) => {
          const already = state.wishlist.some((b) => b.id === book.id);
          if (already) return state;
          return {
            wishlist: [...state.wishlist, book],
            read: state.read.filter((b) => b.id !== book.id), // видаляємо з read
          };
        }),

      removeFromWishlist: (id) =>
        set((state) => ({ wishlist: state.wishlist.filter((b) => b.id !== id) })),

      isInRead: (id) => get().read.some((b) => b.id === id),
      isInWishlist: (id) => get().wishlist.some((b) => b.id === id),

      moveWishlistToRead: (id) =>
        set((state) => {
          const item = state.wishlist.find((b) => b.id === id);
          if (!item) return state;
          return {
            read: state.read.some((b) => b.id === id) ? state.read : [...state.read, item],
            wishlist: state.wishlist.filter((b) => b.id !== id),
          };
        }),
    }),
    {
      name: "library-storage", 
      partialize: (state) => ({ read: state.read, wishlist: state.wishlist }), 
    }
  )
);
