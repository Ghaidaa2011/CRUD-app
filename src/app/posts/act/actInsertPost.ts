import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/axios-global"
import { TPost } from "../../../types/post";
import AxiosErrorHandler from "../../../utils/AxiosErrorHandler";
interface State {
  auth: {
    name: string;
  };
}
const actInsertPost = createAsyncThunk<TPost, TPost, { state: State }>("posts/actInsertPost", async (post, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  post.userName = getState().auth.name;
  try {
    const response = await axios.post("/posts", post);
    return response.data;
  } catch (error) {
    return rejectWithValue(AxiosErrorHandler(error));
  }
});
export default actInsertPost; 