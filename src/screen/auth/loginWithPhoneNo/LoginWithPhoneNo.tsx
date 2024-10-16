import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AuthPage from '../../../components/authPage/AuthPage';
import Button from '../../../components/button/Button';
import PhoneNumberInput from '../../../components/phoneNumberInput/PhoneNumberInput';
import {COLORS} from '../../../constants/colors';
import {RootStackParamList} from '../../../types/Types';
import {useLoginWithPhoneNo} from './useLoginWithPhoneNo';

export default function LoginWithPhoneNo() {
  const {
    navigation,
    onSubmit,
    phoneNumber,
    selectedCountryCode,
    setPhoneNumber,
    setSelectedCountryCode,
    errorState,
    loading,
  } = useLoginWithPhoneNo();
  return (
    <View style={{flex: 1}}>
      <AuthPage title="Login" goBack>
        <PhoneNumberInput
          label="Phone Number"
          value={phoneNumber}
          onChange={setPhoneNumber}
          selectedCountryCode={selectedCountryCode}
          setSelectedCountryCode={setSelectedCountryCode}
        />
        {errorState && (
          <Text
            style={{
              fontSize: 12,
              fontStyle: 'italic',
              marginVertical: 4,
              color: 'red',
            }}>
            {errorState}
          </Text>
        )}
        <View style={{marginTop: 25}}>
          <Button
            title={loading ? 'Loading...' : 'Send OTP'}
            onPress={() => {
              onSubmit();
            }}
          />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
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
