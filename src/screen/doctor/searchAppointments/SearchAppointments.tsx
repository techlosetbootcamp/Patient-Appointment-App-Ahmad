import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import AppointmentInfo from '../../../components/appointmentsList/appointmentInfo/AppointmentInfo';
import {appointments} from '../../../components/appointmentsList/AppointmentsList';
import Header from '../../../components/header/Header';
import {COLORS} from '../../../constants/colors';
import {AppointmentInfoType, RootStackParamList} from '../../../types/Types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
const SearchAppointments = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={26} color={'white'} />
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: 6,
              paddingRight: 12,
              borderRadius: 8,
              height: 38,
              marginLeft: 14,
            }}>
            <TextInput placeholder="Search Appointments" />
            <Feather name="search" size={20} color={COLORS.primary} />
          </View>
        </View>
      </Header>
      <View
        style={{
          backgroundColor: COLORS.inputBg,
          height: 34,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Search</Text>
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
          data={appointments}
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
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchAppointments;
