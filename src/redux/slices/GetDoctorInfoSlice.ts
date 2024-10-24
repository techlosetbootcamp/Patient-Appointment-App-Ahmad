import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GET_DOCTOR_INFO} from '../../graphql/queries/getDoctorInfo';
import {client} from '../../lib/client/Client';
import {getdoctorInfoState} from '../../types/Types';
const initialState: getdoctorInfoState = {
  doctor: null,
  error: null,
  isLoading: false,
};

export const getDoctorInfo = createAsyncThunk(
  'addDoctorInfo',
  async (_, {rejectWithValue}) => {
    try {
      const getData = await client.query({
        query: GET_DOCTOR_INFO,
      });
      return getData.data;
    } catch (error: any) {
      console.log(
        'Error while adding Doctor Info,Error form redux slice',
        error.message,
      );
      return rejectWithValue(error.message);
    }
  },
);
const GetDoctorInfo = createSlice({
  name: 'AddDoctorInfo',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getDoctorInfo.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getDoctorInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.doctor = action.payload;
    });
    builder.addCase(getDoctorInfo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});
export default GetDoctorInfo.reducer;
