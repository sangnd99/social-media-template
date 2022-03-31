import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface IAuth {
  isLoggedIn: boolean;
}

const initialState: IAuth = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isLoggedIn = true;
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
