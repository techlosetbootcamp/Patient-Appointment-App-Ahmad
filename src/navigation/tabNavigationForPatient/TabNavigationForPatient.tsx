import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Patient from '../../screen/patient/Patient';
import PatientProfile from '../../screen/patient/patientProfile/PatientProfile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS, height, width} from '../../constants/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const Tab = createBottomTabNavigator();
const TabNavigationForPatient = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 76,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon({focused}) {
            return (
              <View style={{display: 'flex', alignItems: 'center'}}>
                <Ionicons
                  name="home-outline"
                  size={28}
                  color={focused ? COLORS.primary : COLORS.secondry}
                />
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 10,
                    color: focused ? COLORS.primary : COLORS.secondry,
                  }}>
                  Home
                </Text>
              </View>
            );
          },
        }}
        name="Patient Home Screen"
        component={Patient}
      />
      {/* <Tab.Screen name="Patient Profile" component={patientProfile} /> */}

      <Tab.Screen
        options={{
          tabBarIcon({focused}) {
            return (
              <View style={{display: 'flex', alignItems: 'center'}}>
                <Feather
                  name="user"
                  size={28}
                  color={focused ? COLORS.primary : COLORS.secondry}
                />
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 10,
                    color: focused ? COLORS.primary : COLORS.secondry,
                  }}>
                  Profile
                </Text>
              </View>
            );
          },
        }}
        name="Patient Profile"
        component={PatientProfile}
      />
    </Tab.Navigator>
  );
};

export default TabNavigationForPatient;
