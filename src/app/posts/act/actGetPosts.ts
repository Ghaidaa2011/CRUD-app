import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TPost } from "../../../types/post";
import AxiosErrorHandler from "../../../utils/AxiosErrorHandler";

type TResponse = TPost[];
                                                        // "  _  " arg is the data that i send to the dispatch action
const actGetPost = createAsyncThunk("posts/actGetPost", async(_,thunkAPI)=>{
  const {rejectWithValue} = thunkAPI;
  try {
    const response = await axios.get<TResponse>("http://localhost:3010/posts");
    return response.data;
  } catch (error) {
    return rejectWithValue(AxiosErrorHandler(error));

  }
})
export default actGetPost;