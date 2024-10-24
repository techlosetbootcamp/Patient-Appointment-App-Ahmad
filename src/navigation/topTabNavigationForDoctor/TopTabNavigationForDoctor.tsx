import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpCommingAppointments from '../../screen/doctor/appointments/upCommingAppointments/UpCommingAppointments';
import MissedAppointments from '../../screen/doctor/appointments/missedAppointments/MissedAppointments';
import CompletedAppointments from '../../screen/doctor/appointments/completedAppointments/CompletedAppointments';
import {COLORS} from '../../constants/colors';
import Header from '../../components/header/Header';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/Types';
const screens = [
  {
    name: 'UpCommingAppointments',
    component: UpCommingAppointments,
    label: 'Upcoming',
  },
  {
    name: 'MissedAppointments',
    component: MissedAppointments,
    label: 'Missed',
  },
  {
    name: 'CompletedAppointments',
    component: CompletedAppointments,
    label: 'Completed',
  },
];

const TopTabNavigationForDoctor = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const TopTab = createMaterialTopTabNavigator();

  return (
    <>
      <Header>
        <StatusBar backgroundColor={COLORS.primary} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: 'white',
              letterSpacing: 1,
            }}>
            Appointments
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchAppointments')}
            activeOpacity={0.5}>
            <Feather name="search" size={22} color={'white'} />
          </TouchableOpacity>
        </View>
      </Header>

      <TopTab.Navigator
        id="TopTabNavigatorForDoctor"
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12, color: COLORS.primary},
          tabBarIndicatorStyle: {backgroundColor: COLORS.primary},
          tabBarStyle: {backgroundColor: 'white', height: 42},
        }}>
        {screens.map(screen => (
          <TopTab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{tabBarLabel: screen.label}}
          />
        ))}
      </TopTab.Navigator>
    </>
  );
};

export default TopTabNavigationForDoctor;
