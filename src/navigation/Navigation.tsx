import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import OnBoarding from '../screen/onBoarding/OnBoarding';
import LoginWithPhoneNo from '../screen/auth/loginWithPhoneNo/LoginWithPhoneNo';
import Signup from '../screen/auth/signup/Signup';
import Home from '../screen/home/Home';
import Splash from '../screen/splash/Splash';
import {RootStackParamList} from '../types/Types';
import LoginWithEmail from '../screen/auth/loginWithEmail/LoginWithEmail';

import ForgotPassword from '../screen/auth/resetPassword/sendResetPasswordOtp/SendResetPasswordOtp';
import ForgotPasswordOtp from '../screen/auth/resetPassword/forgotPasswordOtpVerification/ForgotPasswordOtpVerification';
import NewPassword from '../screen/auth/resetPassword/newPassword/NewPassword';
import VerifyOtp from '../screen/auth/loginWithPhoneNo/verifyOtp/VerifyOtp';
import Doctor from '../screen/doctor/Doctor';
import Patient from '../screen/patient/Patient';
import TabNavigationForPatient from './tabNavigationForPatient/TabNavigationForPatient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {decodeJwtToken} from '../utils/decodeJwtToken';
import TabNavigationForDoctor from './tabNavigationForDoctor/TabNavigationForDoctor';
import SearchAppointments from '../screen/doctor/searchAppointments/SearchAppointments';
import SearchPatients from '../screen/doctor/searchPatients/SearchPatients';
import DoctorUnavailability from '../screen/doctor/doctorUnavailability/DoctorUnavailability';
import DoctorAvailability from '../screen/doctor/doctorAvailability/DoctorAvailability';
import AddDoctorInfo from '../screen/doctor/addDoctorInfo/AddDoctorInfo';

export default function Navigation() {
  const Stack = createStackNavigator<RootStackParamList>();
  const [role, setRole] = useState<string | undefined>('');
  useEffect(() => {
    const fetchRole = async () => {
      const token = await decodeJwtToken();
      setRole(token?.decode.role);
    };
    fetchRole();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="LoginWithPhoneNo" component={LoginWithPhoneNo} />
      <Stack.Screen name="LoginWithEmail" component={LoginWithEmail} />
      <Stack.Screen name="VerifyOTP" component={VerifyOtp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ForgotPasswordOtp" component={ForgotPasswordOtp} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="Doctor" component={Doctor} />
      <Stack.Screen name="Patient" component={Patient} />
      <Stack.Screen name="SearchAppointments" component={SearchAppointments} />
      <Stack.Screen name="SearchPatients" component={SearchPatients} />
      <Stack.Screen name="AddDoctorInfo" component={AddDoctorInfo} />
      <Stack.Screen
        name="DoctorUnavailability"
        component={DoctorUnavailability}
      />
      <Stack.Screen name="DoctorAvailability" component={DoctorAvailability} />

      {role === 'PATIENT' ? (
        <Stack.Screen name="Home" component={TabNavigationForPatient} />
      ) : (
        <Stack.Screen name="Home" component={TabNavigationForDoctor} />
      )}
    </Stack.Navigator>
  );
}
