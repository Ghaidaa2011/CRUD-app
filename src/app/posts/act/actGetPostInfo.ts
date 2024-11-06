import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/axios-global"
import AxiosErrorHandler from "../../../utils/AxiosErrorHandler";

const actGetPostInfo = createAsyncThunk("posts/actGetPostInfo", async (id: string | undefined, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(AxiosErrorHandler(error));

  }
});
export default actGetPostInfo; 