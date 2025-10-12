import { create } from "zustand";

interface CategoryState {
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
  clearSelectedCategory: () => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategory: null,
  setSelectedCategory: (category: string) => {
    set({ selectedCategory: category });
  },
  clearSelectedCategory: () => {
    set({ selectedCategory: null });
  },
}));
