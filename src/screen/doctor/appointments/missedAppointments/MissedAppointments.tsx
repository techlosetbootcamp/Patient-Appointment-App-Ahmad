import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {COLORS} from '../../../../constants/colors';
import AppointmentInfo from '../../../../components/appointmentsList/appointmentInfo/AppointmentInfo';
import {AppointmentInfoType} from '../../../../types/Types';
import {appointments} from '../../../../components/appointmentsList/AppointmentsList';
import {useQuery} from '@apollo/client';
import {FETCH_TODAY_MISSED_APPOINTMENTS} from '../../../../graphql/queries/fetchTodayAppointments';
import Error from '../../../../components/error/Error';
import Loader from '../../../../components/loader/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState, useAppDispatch} from '../../../../redux/store';
import {
  getTodayMissedAppointments,
  getTodayUpcommingAppointments,
} from '../../../../redux/slices/GetTodayAppointmentsSlice';
import Toast from 'react-native-toast-message';

const MissedAppointments = () => {
  const missedAppointments = appointments.filter(
    item => item.status === 'MISSED',
  );
  // const {data, loading, error} = useQuery(FETCH_TODAY_MISSED_APPOINTMENTS, {});
  const dispatch: AppDispatch = useDispatch();
  const {appointment, error, isLoading} = useSelector(
    (state: RootState) => state.getTodayAppointments,
  );

  useEffect(() => {
    dispatch(getTodayMissedAppointments());
  }, [dispatch]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: COLORS.inputBg,
          height: 34,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Today</Text>
      </View>
      {/* <AppointmentsList />
       */}

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: 20,
          paddingTop: 15,
        }}>
        {error && <Error error={error} />}

        {isLoading && <Loader loading={isLoading} />}

        <FlatList
          data={appointment}
          renderItem={({item}: {item: AppointmentInfoType}) => (
            <AppointmentInfo
              age={item?.age}
              appointmentTime={item?.appointmentTime}
              name={item?.name}
              profilePicture={item?.profilePicture}
              status={item?.status}
              id={item?.id}
            />
          )}
        />
      </View>
    </View>
  );
};

export default MissedAppointments;
