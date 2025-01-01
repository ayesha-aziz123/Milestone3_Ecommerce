import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

// LocalStorage se cart data ko retrieve karna
const getCartFromLocalStorage = (): Array<IProduct> => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

// Cart ka initial state
const initialState: Array<IProduct> = getCartFromLocalStorage();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingIndex = state.findIndex((pro) => pro.id === action.payload.id);
      if (existingIndex === -1) {
        state.push(action.payload);
      } else {
        state[existingIndex].quantity += 1;
      }

      // LocalStorage ko update karein
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const updatedCart = state.filter((item) => item.id !== action.payload);

      // LocalStorage ko update karein
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    },
    clearCart: () => {
      // LocalStorage ko clear karein
      localStorage.removeItem("cart");

      return []; // Cart ko empty karein
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
