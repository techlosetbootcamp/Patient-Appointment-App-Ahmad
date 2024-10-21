import {View, Text, FlatList} from 'react-native';
import React from 'react';
import AppointmentInfo from '../../../../components/appointmentsList/appointmentInfo/AppointmentInfo';
import {AppointmentInfoType} from '../../../../types/Types';
import {appointments} from '../../../../components/appointmentsList/AppointmentsList';
import {COLORS} from '../../../../constants/colors';

const CompletedAppointments = () => {
  const completedAppointments = appointments.filter(
    item => item.status === 'COMPLETED',
  );
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
        <FlatList
          data={completedAppointments}
          renderItem={({item}: {item: AppointmentInfoType}) => (
            <AppointmentInfo
              age={item.age}
              appointmentTime={item.appointmentTime}
              name={item.name}
              profilePicture={item.profilePicture}
              status={item.status}
              // key={item.profilePicture}
            />
          )}
        />
      </View>
    </View>
  );
};

export default CompletedAppointments;
