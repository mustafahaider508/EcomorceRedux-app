import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type T = any;
export interface CounterState {
  items: Array<T>;
}
 const items = JSON.parse(localStorage.getItem("items")!);

const initialState: CounterState = {
  items: items ? items : [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemtobasket: (state, action) => {
      state.items = [...state.items, action.payload];
      localStorage.setItem("items",JSON.stringify( [...state.items, action.payload] ))
    },
    removeItemfrombasket:(state,action) => {
    let  newBasketitem = [...state.items];
    const index = state.items.findIndex((item) => item.id === action.payload.id)
    if(index !== 1){
      newBasketitem.splice(index,1);
      state.items = newBasketitem;
      localStorage.setItem("items",JSON.stringify( newBasketitem ))
    }else{
      alert("no item in basket")
    }}
  },
});

export const { addItemtobasket, removeItemfrombasket } = basketSlice.actions;
export const selectItems = (state: RootState) => state.basket.items;
export const removeItem = (state:RootState) => state.basket.items
export const selectItemsCount = (state: RootState) => state.basket.items.length;
export default basketSlice.reducer;
