import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/axios-global"
import { TPost } from "../../../types/post";
import AxiosErrorHandler from "../../../utils/AxiosErrorHandler";
import { RootState } from "../..";

const actInsertPost = createAsyncThunk<TPost, TPost>("posts/actInsertPost", async (post, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  const { auth } = getState() as RootState;
  post.userId = auth.user?.id;
  try {
    const response = await axios.post(`/posts`, post);
    return response.data;
  } catch (error) {
    return rejectWithValue(AxiosErrorHandler(error));
  }
});
export default actInsertPost; 