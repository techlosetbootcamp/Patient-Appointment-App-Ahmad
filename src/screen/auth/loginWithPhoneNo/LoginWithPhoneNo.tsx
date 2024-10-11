import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../constants/colors';
import AuthPage from '../../../components/authPage/AuthPage';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import PhoneNumberInput from '../../../components/phoneNumberInput/PhoneNumberInput';
import {RootStackParamList} from '../../../types/Types';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export default function LoginWithPhoneNo() {
  const [phoneNumber, setPhoneNumber] = useState<number>(0);
  const onSubmit = () => {
    console.log('PhoneNo', phoneNumber);
  };
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={{flex: 1}}>
      <AuthPage title="Login">
        <PhoneNumberInput
          label="Phone Number"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        <View style={{marginTop: 25}}>
          <Button
            title="Send OTP"
            onPress={() => navigation.navigate('verifyOTP')}
          />
        </View>
        <View style={{marginTop: 25}}>
          <Button
            title="Login with Email"
            onPress={() => navigation.navigate('LoginWithEmail')}
            bgTransparent
            textSecondry
            borderSecondry
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 40,
            justifyContent: 'center',
          }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: COLORS.primary}}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </AuthPage>
    </View>
  );
}
