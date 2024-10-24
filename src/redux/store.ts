import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import GetTodayAppointmentsReducer from './slices/GetTodayAppointmentsSlice';
import AddDoctorInfoReducer from './slices/AddDoctorInfoSlice';
import GetDoctorInfoReducer from './slices/GetDoctorInfoSlice';
export const store = configureStore({
  reducer: {
    getTodayAppointments: GetTodayAppointmentsReducer,
    addDoctorInfo: AddDoctorInfoReducer,
    getDoctorInfo: GetDoctorInfoReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
