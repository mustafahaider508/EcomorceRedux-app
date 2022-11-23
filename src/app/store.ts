import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlice";
import todoReducer from "../features/todoSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    todo:todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
