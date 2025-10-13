import { SortKey, SortOrder } from "@/types/product/productResponse";
import { create } from "zustand";

interface ProductStore {
  sortKey: SortKey;
  sortOrder: SortOrder;
  setSortKey: (key: SortKey) => void;
  setSortOrder: (key: SortOrder) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  sortKey: SortKey.PRICE,
  sortOrder: SortOrder.ASC,
  setSortKey: (sort) => set({ sortKey: sort }),
  setSortOrder: (order) => set({ sortOrder: order }),
}));
