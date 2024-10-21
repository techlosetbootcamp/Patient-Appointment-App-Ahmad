import {View, Text, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {AppointmentInfoType} from '../../../types/Types';
import {COLORS} from '../../../constants/colors';
const AppointmentInfo: React.FC<AppointmentInfoType> = ({
  age,
  appointmentTime,
  name,
  profilePicture,
  status,
}) => {
  let backgroundColor;
  switch (status) {
    case 'UPCOMING':
      backgroundColor = COLORS.primary;
      break;
    case 'IN_PROGRESS':
      backgroundColor = '#4aAF50';
      break;
    case 'MISSED':
      backgroundColor = 'red';
      break;
    case 'COMPLETED':
      backgroundColor = 'green';
      break;
    case 'CANCELLED':
      backgroundColor = 'red';
      break;

    default:
      backgroundColor: 'black';
      break;
  }
  return (
    <View
      style={{
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
        // backgroundColor: 'salmon',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: profilePicture}}
          style={{width: 54, height: 54, borderRadius: 50}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: '700'}}>{name}</Text>
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
            <Text>{age} Years</Text>
            {appointmentTime && <Text style={{marginHorizontal: 5}}>|</Text>}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 6,
                alignItems: 'center',
              }}>
              <Text>{appointmentTime}</Text>
              <View
                style={{
                  height: 8,
                  width: 8,
                  backgroundColor: backgroundColor,
                  borderRadius: 50,
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View>
        <Entypo name="dots-three-vertical" size={25} />
      </View>
    </View>
  );
};

export default AppointmentInfo;
