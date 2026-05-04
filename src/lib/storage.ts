/* eslint-disable @typescript-eslint/no-explicit-any */
export const LOCAL_STORAGE_KEYS = {
  CART_DATA: "cartData",
} as const;

export const setLocalStorage = (key: string, value: any) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

export const getLocalStorage = (key: string) => {
  if (typeof window === "undefined") return null;
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return null;
  }
};
