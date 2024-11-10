import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/axios-global"
import { TPost } from "../../../types/post";
import AxiosErrorHandler from "../../../utils/AxiosErrorHandler";
import { RootState } from "../..";

type TResponse = TPost[];
// "  _  " arg is the data that i send to the dispatch action
const actGetPost = createAsyncThunk("posts/actGetPost", async (_, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  const { auth } = getState() as RootState;
  try {
    const response = await axios.get<TResponse>(`/posts?userId=${auth.user?.id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(AxiosErrorHandler(error));
  }
})
export default actGetPost;