import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
};

const autSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isAuth = true;
    },
    setLogout: (state) => {
      state.isAuth = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setLogin, setLogout, setUser } = autSlice.actions;
export default autSlice.reducer;
