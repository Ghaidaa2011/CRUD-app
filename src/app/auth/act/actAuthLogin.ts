import axios from "../../../services/axios-global";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosErrorHandler from "../../../utils/AxiosErrorHandler";

interface IFormData {
  email: string,
  password: string
}
interface IResponse {
  accessToken: string,
  user: {
    firstName: string,
    lastName: string,
    email: string,
    password: string
  }
}
const actAuthLogin = createAsyncThunk("auth/actAuthLogin", async (formData: IFormData, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await axios.post<IResponse>("/lonin", formData);
    return res.data;
  } catch (error) {
    return rejectWithValue(AxiosErrorHandler(error));
  }
});
export default actAuthLogin;