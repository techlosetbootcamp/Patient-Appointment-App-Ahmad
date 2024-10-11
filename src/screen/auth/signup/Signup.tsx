import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/colors';
import AuthPage from '../../../components/authPage/AuthPage';
import Input from '../../../components/input/Input';
import {useSignup} from './useSignup';
import PhoneNumberInput from '../../../components/phoneNumberInput/PhoneNumberInput';
import Button from '../../../components/button/Button';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/Types';

export default function Signup() {
  const {
    email,
    name,
    password,
    phoneNo,
    role,
    setEmail,
    setName,
    setPassword,
    setPhoneNo,
    setRole,
  } = useSignup();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const submitHandler = () => {
    console.log('Data', {name, email, password, role, phoneNo});
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <AuthPage goBack title="Sign Up">
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',

            justifyContent: 'space-between',
          }}>
          <Input
            label="Name"
            value={name}
            onChangeText={setName}
            keyboardType="ascii-capable"
            isWidthHalf
          />
          <Input label="Role" value={role} onChangeText={setRole} isWidthHalf />
        </View>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          inputMode="email"
          keyboardType="email-address"
        />
        <PhoneNumberInput
          label="Phone Number"
          value={phoneNo}
          onChange={setPhoneNo}
        />

        <Input
          label="Password"
          value={password}
          isPassword
          onChangeText={setPassword}
        />
        <View style={{marginTop: '15%'}}>
          <Button title="Create an Account" onPress={submitHandler} />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 5,
            justifyContent: 'center',
          }}>
          <Text>Already Have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginWithEmail')}>
            <Text style={{color: COLORS.primary}}> Login</Text>
          </TouchableOpacity>
        </View>
      </AuthPage>
    </View>
  );
}
