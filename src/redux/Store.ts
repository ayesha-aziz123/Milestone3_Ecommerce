import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";

// Redux state ko LocalStorage se initialize karna
const loadState = (): { cart: ReturnType<typeof cartReducer> } | undefined => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error("Error loading state from LocalStorage:", err);
    return undefined;
  }
};

// Redux state ko LocalStorage mein save karna
const saveState = (state: { cart: ReturnType<typeof cartReducer> }) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Error saving state to LocalStorage:", err);
  }
};

// Initial state ko LocalStorage se preload karna
const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Correct reducer key
  },
  devTools: process.env.NODE_ENV !== "production",
  preloadedState, // Properly typed initial state
});

// Store subscription to save state to LocalStorage
store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});

// RootState ko yahan define karte hain to circular reference avoid hota hai
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
