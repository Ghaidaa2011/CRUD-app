import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/axios-global"
import AxiosErrorHandler from "../../../utils/AxiosErrorHandler";

interface IFormData {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

const actAuthRegister = createAsyncThunk("auth/actAuthRegister", async (formData: IFormData, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await axios.post("/users", formData);
    return res.data;
  } catch (error) {
    return rejectWithValue(AxiosErrorHandler(error));
  }
});
export default actAuthRegister;