import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AxiosErrorHandler from "../../../utils/AxiosErrorHandler";

const actDeletePost = createAsyncThunk("posts/actDeletePost", async(id:string,thunkAPI)=>{
  const {rejectWithValue} = thunkAPI;
  try {
    await axios.delete(`http://localhost:3010/posts/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(AxiosErrorHandler(error));

  }
})
export default actDeletePost;