import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/axios-global"
import { TPost } from "../../../types/post";
import AxiosErrorHandler from "../../../utils/AxiosErrorHandler";

const actEditPost = createAsyncThunk<TPost, TPost>("posts/actEditPost", async (post, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.patch(`/posts/${post.id}`, post);
    return response.data;
  } catch (error) {
    return rejectWithValue(AxiosErrorHandler(error));

  }
});
export default actEditPost; 