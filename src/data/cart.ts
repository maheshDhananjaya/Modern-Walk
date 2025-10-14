// src/lib/mockCart.ts
export const mockCartData = {
  summary: {
    subtotal: 255.0,
    shipping: 5.0,
    tax: 26.0,
    total: 286.0,
  },
  products: [
    {
      id: 1,
      title: "Men's Cotton T-Shirt",
      price: 55.99,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      qty: 1,
      size: "Small",
    },
    {
      id: 2,
      title: "Women's Casual Dress",
      price: 80.99,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      qty: 2,
      size: "Medium",
    },
    {
      id: 3,
      title: "Unisex Running Shoes",
      price: 95.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      qty: 2,
      size: "Large",
    },
    {
      id: 4,
      title: "Leather Wallet",
      price: 25.99,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
      qty: 1,
      size: "Small",
    },
  ],
};
