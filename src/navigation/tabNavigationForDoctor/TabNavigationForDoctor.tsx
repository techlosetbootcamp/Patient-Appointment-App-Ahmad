import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import {COLORS} from '../../constants/colors';
import BottomTab from '../../components/bottomTab/BottomTab';
import PatientList from '../../screen/doctor/patientList/PatientList';
import DoctorProfile from '../../screen/doctor/doctorProfile/DoctorProfile';
import TopTabNavigationForDoctor from '../topTabNavigationForDoctor/TopTabNavigationForDoctor';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/Types';

const Tab = createBottomTabNavigator();

const TabNavigationForDoctor = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        title: '',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 76,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon({focused}) {
            return (
              <BottomTab
                IconProps={MaterialCommunityIcons}
                iconName="calendar-clock-outline"
                title="Appointments"
                focused={focused}
              />
            );
          },
        }}
        name="Appointments"
        component={TopTabNavigationForDoctor}
      />
      <Tab.Screen
        options={{
          tabBarIcon({focused}) {
            return (
              <BottomTab
                IconProps={Foundation}
                iconName="clipboard-notes"
                title="Patient List"
                focused={focused}
              />
            );
          },
        }}
        name="Patient List"
        component={PatientList}
      />
      <Tab.Screen
        options={{
          tabBarIcon({focused}) {
            return (
              <BottomTab
                IconProps={Feather}
                iconName="user"
                title="Profile"
                focused={focused}
              />
            );
          },
        }}
        name="Doctor Profile"
        component={DoctorProfile}
      />
    </Tab.Navigator>
  );
};

export default TabNavigationForDoctor;
