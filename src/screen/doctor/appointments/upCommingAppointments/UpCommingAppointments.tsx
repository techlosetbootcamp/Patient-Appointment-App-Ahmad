import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AppointmentInfo from '../../../../components/appointmentsList/appointmentInfo/AppointmentInfo';
import {appointments} from '../../../../components/appointmentsList/AppointmentsList';
import {COLORS} from '../../../../constants/colors';
import {AppointmentInfoType} from '../../../../types/Types';

const UpCommingAppointments = () => {
  const upcomingAppointments = appointments.filter(
    item => item.status === 'UPCOMING',
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
          data={upcomingAppointments}
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

export default UpCommingAppointments;
