import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit';
import {getTodayAppointmentState} from '../../types/Types';
import {client} from '../../lib/client/Client';
import {
  FETCH_TODAY_COMPLETED_APPOINTMENTS,
  FETCH_TODAY_MISSED_APPOINTMENTS,
  FETCH_TODAY_UPCOMMING_APPOINTMENTS,
} from '../../graphql/queries/fetchTodayAppointments';
const initialState: getTodayAppointmentState = {
  appointment: null,
  error: null,
  isLoading: false,
};

export const getTodayUpcommingAppointments = createAsyncThunk(
  'getTodayUpcommingAppointments',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await client.query({
        query: FETCH_TODAY_UPCOMMING_APPOINTMENTS,
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'An unexpected error occurred.');
    }
  },
);

export const getTodayMissedAppointments = createAsyncThunk(
  'getTodayMissedAppointments',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await client.query({
        query: FETCH_TODAY_MISSED_APPOINTMENTS,
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'An unexpected error occurred.');
    }
  },
);
export const getTodayCompletedAppointments = createAsyncThunk(
  'getTodayCompletedAppointments',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await client.query({
        query: FETCH_TODAY_COMPLETED_APPOINTMENTS,
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'An unexpected error occurred.');
    }
  },
);

const GetTodayAppointments = createSlice({
  name: 'GetTodayAppointments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTodayUpcommingAppointments.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      getTodayUpcommingAppointments.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.appointment = action.payload;
      },
    );
    builder.addCase(getTodayUpcommingAppointments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
      console.log('Action Payload', action.payload);
    });
    builder.addCase(getTodayMissedAppointments.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTodayMissedAppointments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.appointment = action.payload;
    });
    builder.addCase(getTodayMissedAppointments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(getTodayCompletedAppointments.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      getTodayCompletedAppointments.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.appointment = action.payload;
      },
    );
    builder.addCase(getTodayCompletedAppointments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});
export default GetTodayAppointments.reducer;
