import { TOKEN_POST } from "../Api";
import createAsyncSlice from "./helper/createAsyncSlice";

const slice = createAsyncSlice({
  name: 'token',
  fetchConfig: (user) => TOKEN_POST(user),
  initialState: {
    data: {
      token: window.localStorage.getItem('token') || null
    }
  } 
});

export const fetchToken = slice.asyncAction;
export const { resetState:resetTokenState } = slice.actions;

export default slice.reducer;
