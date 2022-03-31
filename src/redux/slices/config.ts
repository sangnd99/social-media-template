import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { INavigationProps } from "@typings";

export interface IConfig {
  currentPage: INavigationProps;
}

const initialState: IConfig = {
  currentPage: "HOME",
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<INavigationProps>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.config,
      };
    },
  },
});

export const { setCurrentPage } = configSlice.actions;

export default configSlice.reducer;
