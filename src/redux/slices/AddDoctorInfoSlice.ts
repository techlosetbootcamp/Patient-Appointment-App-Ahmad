import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ADD_DOCTOR_INFO} from '../../graphql/mutations/addDoctorInfo';
import {doctorInfo, doctorInfoState} from '../../types/Types';
import {client} from '../../lib/client/Client';
const initialState: doctorInfoState = {
  doctor: null,
  error: null,
  isLoading: false,
};

export const addDoctorInfo = createAsyncThunk(
  'addDoctorInfo',
  async (
    {name, address, email, gender, profilePhoto}: doctorInfo,
    {rejectWithValue},
  ) => {
    try {
      const addData = await client.mutate({
        mutation: ADD_DOCTOR_INFO,
        variables: {name, address, email, gender, profilePhoto},
      });
    } catch (error: any) {
      console.log(
        'Error while adding Doctor Info,Error form redux slice',
        error.message,
      );
      return rejectWithValue(error.message);
    }
  },
);
const AddDoctorInfo = createSlice({
  name: 'AddDoctorInfo',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addDoctorInfo.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addDoctorInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.doctor = action.payload;
    });
    builder.addCase(addDoctorInfo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});
export default AddDoctorInfo.reducer;
