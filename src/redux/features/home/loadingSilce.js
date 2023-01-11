const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  isLoading: false
}

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = !state.isLoading;
    },

    // Add thêm hàm vào đây
  },
});

const { actions, reducer } = loadingSlice;
export const { setLoading } = actions;
export default reducer;
