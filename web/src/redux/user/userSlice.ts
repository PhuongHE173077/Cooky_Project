import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from "../../utils/axiosCustomiz.";


//declare value state of slice in redux
const initialState = {
  currentUser: null,
}
interface LoginCredentials {
  email: string;
  password: string;
  admin: boolean
}


//xử lí catching api bất đồng bộ
export const loginUserAPI = createAsyncThunk(
  'user/loginUserAPI',
  async (data: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`api/v1/users/login`, data);
      return response
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);

export const registerUserAPI = createAsyncThunk(
  'user/registerUserAPI',
  async (data) => {
    return await axios.post(`api/v1/users/register`, data)
  }
)


export const logoutUserAPI = createAsyncThunk(
  'user/logoutUserAPI',
  async (showSuccessMessage: boolean = true) => {
    const response = await axios.delete('api/v1/users/logout')
    if (showSuccessMessage) {
      toast.success('Logout successfully!')
    }
    return response
  }
)


export const updateUserAPI = createAsyncThunk(
  'user/updateUserAPI',
  async (data) => {
    return await axios.put(`v1/users/update`, data)
  }
)


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {


  },
  extraReducers: (builder) => {
    builder.addCase(loginUserAPI.fulfilled, (state: any, action) => {
      const user = action.payload
      state.currentUser = user
    })

    builder.addCase(registerUserAPI.fulfilled, (state: any, action) => {
      const user = action.payload
      state.currentUser = user
    })


    builder.addCase(logoutUserAPI.fulfilled, (state) => {
      state.currentUser = null
    })


    builder.addCase(updateUserAPI.fulfilled, (state: any, action) => {
      const user = action.payload
      state.currentUser = user
    })
  }
})


// Action creators are generated for each case reducer function
// export const { } = userSlice.actions


export const selectCurrentUser = (state: any) => {
  return state.user.currentUser
}


export const userReducer = userSlice.reducer