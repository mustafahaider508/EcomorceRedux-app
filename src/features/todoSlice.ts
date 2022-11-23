import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type T = any;
export interface CounterState {
  lists: Array<T>;
}
 const items = JSON.parse(localStorage.getItem("todos")!);

const initialState: CounterState = {
    lists: items ? items : [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.lists = [...state.lists, action.payload];
      localStorage.setItem("todos",JSON.stringify( [...state.lists, action.payload] ))
    },

  },
});

export const { addTodos } = todoSlice.actions;
export const selectTodo = (state:any) => state.todo.lists;
export default todoSlice.reducer;
