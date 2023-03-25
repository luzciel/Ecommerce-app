import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: cartInitialState,
  },
  reducers: {
    addCart: (state, action) => {
      const { id } = action.payload;
      const productInCartIndex = state.cartProducts.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = state.cartProducts.map(product => {
          if(product.id === id) {
            return {
              ...product, quantity: product.quantity + 1
            }
          }
          return product
        })

        updateLocalStorage(newState)
        state.cartProducts = newState
      } else {
        const newState = [...state.cartProducts, action.payload]
        updateLocalStorage(newState)
        state.cartProducts = newState;
      }
    },
    removeFromCart: (state, action) => {
      const newState = state.cartProducts.filter(item => item.id !== action.payload)
      updateLocalStorage(newState)
      state.cartProducts = newState
    },
    updateCartProducts: (state, action) => {
      const tasks = state.cartProducts.map((task) => {
        if (task.id === action.payload.id) {
          task.checked = action.payload.checked;
        }
        return task;
      });
      state.cartProducts = tasks;
    },
  },
});

export const { addCart, removeFromCart, updateCartProducts } =
cartSlice.actions;
export default cartSlice;
