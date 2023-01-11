import signinApi from "../../../api/auth";
import Storage from "../../../untils/Storage";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  data:"",
  isLogin: false,
  _token: "",
  account: "",
  password: "",
};

export const login = createAsyncThunk("signin/login", async (data, thunkAPI) => {
  const response = await signinApi.login(data);
  // Storage.setItem("_token", response.RESPONSES.ACCESS_TOKEN);
  console.log(response," respone");
  return response;
});

const signinSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    setLogin(state) {
      console.log(state);
      return 123;
    },
    checkLogin: (state, action) => {
      const token = action.payload;
      state._token = token;
      state.isLogin = true;
    },
    logout:(state) =>{
      Storage.removeItem("_token")
      state._token = ""
      state.isLogin = false
    }
    // Add thêm hàm vào đây
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      // state.isLogin = true;
      state.data = action.payload.data;
      console.log(action," acc tion");
      
    },
  },
});

const { actions, reducer } = signinSlice;
export const { setLogin, checkLogin,logout } = actions;
export default reducer;
