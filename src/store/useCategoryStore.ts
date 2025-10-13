import { create } from "zustand";

import { DEFAULT_CATEGORY } from "@/constants/product";

interface CategoryState {
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
  clearSelectedCategory: () => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategory: DEFAULT_CATEGORY,
  setSelectedCategory: (category: string) => {
    set({ selectedCategory: category });
  },
  clearSelectedCategory: () => {
    set({ selectedCategory: null });
  },
}));
