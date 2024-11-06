import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/axios-global"
import AxiosErrorHandler from "../../../utils/AxiosErrorHandler";

const actDeletePost = createAsyncThunk("posts/actDeletePost", async (id: string, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    await axios.delete(`/posts/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(AxiosErrorHandler(error));

  }
})
export default actDeletePost;