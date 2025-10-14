import { create } from "zustand";

interface CartStore {
  cartItemCount: number;
  setCartItemCount: (count: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItemCount: 0,
  setCartItemCount: (count: number) => {
    set({ cartItemCount: count });
  },
}));
