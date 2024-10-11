import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/colors';
import AuthPage from '../../../components/authPage/AuthPage';
import Input from '../../../components/input/Input';

import PhoneNumberInput from '../../../components/phoneNumberInput/PhoneNumberInput';
import Button from '../../../components/button/Button';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/Types';
import {useLoginWithEmail} from './useLoginWithEmail';

const LoginWithEmail = () => {
  const {
    email,
    password,

    setEmail,

    setPassword,
  } = useLoginWithEmail();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const submitHandler = () => {
    console.log('Data', {email, password});
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <AuthPage goBack title="Login With Email">
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Input
          label="Password"
          value={password}
          isPassword
          onChangeText={setPassword}
        />
        <View style={{marginTop: '15%'}}>
          <Button title="Login" onPress={submitHandler} />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 5,
            justifyContent: 'center',
          }}>
          <Text>Don't Have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginWithPhoneNo')}>
            <Text style={{color: COLORS.primary}}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </AuthPage>
    </View>
  );
};
export default LoginWithEmail;
