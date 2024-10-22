import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../constants/colors';
import AuthPage from '../../../components/authPage/AuthPage';
import Input from '../../../components/input/Input';
import {useSignup} from './useSignup';
import PhoneNumberInput from '../../../components/phoneNumberInput/PhoneNumberInput';
import Button from '../../../components/button/Button';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/Types';
import DropDown from '../../../components/dropDown/DropDown';
import {ScrollView} from 'react-native-gesture-handler';

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
    submitHandler,
    ROLE,
    selectedCountryCode,
    setSelectedCountryCode,
    errorstate,
    loading,
  } = useSignup();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}} bounces={false}>
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
              <DropDown
                isWidthHalf
                data={ROLE}
                selectedValue={role}
                setSelectedValue={setRole}
                label="Role"
              />
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
              selectedCountryCode={selectedCountryCode}
              setSelectedCountryCode={setSelectedCountryCode}
            />

            <Input
              label="Password"
              value={password}
              isPassword
              onChangeText={setPassword}
            />

            {errorstate && (
              <Text
                style={{
                  fontSize: 12,
                  fontStyle: 'italic',
                  marginVertical: 4,
                  color: 'red',
                }}>
                {errorstate}
              </Text>
            )}
            <View style={{marginTop: '15%'}}>
              <Button
                title={loading ? 'Loading...' : 'Create an Account'}
                onPress={submitHandler}
              />
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
