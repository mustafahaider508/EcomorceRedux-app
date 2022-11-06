import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type T = any;
export interface CounterState {
  items: Array<T>;
}

const initialState: CounterState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increment: (state) => {},
  },
});

export const { increment } = basketSlice.actions;
export const selectCount = (state: RootState) => state.basket.items;
export default basketSlice.reducer;
