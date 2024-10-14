import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import OnBoarding from '../screen/onBoarding/OnBoarding';
import LoginWithPhoneNo from '../screen/auth/loginWithPhoneNo/LoginWithPhoneNo';
import Signup from '../screen/auth/signup/Signup';
import Home from '../screen/home/Home';
import Splash from '../screen/splash/Splash';
import {RootStackParamList} from '../types/Types';
import LoginWithEmail from '../screen/auth/loginWithEmail/LoginWithEmail';
import VerifyOtp from '../screen/auth/verifyOtp/VerifyOtp';
import ForgotPassword from '../screen/auth/forgotPassword/ForgotPassword';

export default function Navigation() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="LoginWithPhoneNo" component={LoginWithPhoneNo} />
      <Stack.Screen name="LoginWithEmail" component={LoginWithEmail} />
      <Stack.Screen name="verifyOTP" component={VerifyOtp} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
