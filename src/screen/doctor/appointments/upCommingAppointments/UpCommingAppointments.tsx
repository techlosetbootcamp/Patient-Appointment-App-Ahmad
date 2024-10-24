import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AppointmentInfo from '../../../../components/appointmentsList/appointmentInfo/AppointmentInfo';
import {appointments} from '../../../../components/appointmentsList/AppointmentsList';
import {COLORS} from '../../../../constants/colors';
import {AppointmentInfoType} from '../../../../types/Types';
import {AppDispatch, RootState} from '../../../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {getTodayUpcommingAppointments} from '../../../../redux/slices/GetTodayAppointmentsSlice';
import Loader from '../../../../components/loader/Loader';
import Error from '../../../../components/error/Error';

const UpCommingAppointments = () => {
  const upcomingAppointments = appointments.filter(
    item => item.status === 'UPCOMING',
  );
  const dispatch: AppDispatch = useDispatch();
  const {appointment, error, isLoading} = useSelector(
    (state: RootState) => state.getTodayAppointments,
  );

  useEffect(() => {
    dispatch(getTodayUpcommingAppointments());
    console.log('Error on Upcommin', error);
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
        {isLoading && <Loader loading={isLoading} />}
        {error && <Error error={error} />}
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

export default UpCommingAppointments;
