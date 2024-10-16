import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {useVerifyOTP} from './useVerifyOTP';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../../types/Types';
import AuthPage from '../../../../components/authPage/AuthPage';
import {COLORS} from '../../../../constants/colors';
import {VerifyOTPStyles} from './VerifyOTPStyles';
import Button from '../../../../components/button/Button';

const VerifyOtp = () => {
  const {
    input1,
    input2,
    input3,
    input4,
    inputRef1,
    inputRef2,
    inputRef3,
    inputRef4,
    setInput1,
    setInput2,
    setInput3,
    setInput4,
    navigation,
    submitHandler,
    errorState,
    loading,
  } = useVerifyOTP();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <AuthPage title="Verify OTP" goBack>
        <View style={[{marginTop: 8}]}>
          <Text style={[{color: COLORS.primary, marginBottom: 10}]}>
            Enter the OTP
          </Text>
          <View style={VerifyOTPStyles.OTPView}>
            <TextInput
              keyboardType={'numeric'}
              value={input1}
              ref={inputRef1}
              maxLength={1}
              inputMode="numeric"
              onChangeText={e => {
                setInput1(e);
                if (e.length >= 1) {
                  if (inputRef2.current) {
                    inputRef2.current.focus();
                  }
                }
              }}
              style={VerifyOTPStyles.OTPBox}
            />
            <TextInput
              keyboardType={'numeric'}
              value={input2}
              ref={inputRef2}
              maxLength={1}
              inputMode="numeric"
              onChangeText={e => {
                setInput2(e);
                if (e.length >= 1) {
                  if (inputRef3?.current) {
                    inputRef3?.current.focus();
                  }
                } else {
                  inputRef1?.current?.focus();
                }
              }}
              style={VerifyOTPStyles.OTPBox}
            />
            <TextInput
              keyboardType={'numeric'}
              value={input3}
              ref={inputRef3}
              maxLength={1}
              inputMode="numeric"
              onChangeText={e => {
                setInput3(e);
                if (e.length >= 1) {
                  if (inputRef4.current) {
                    inputRef4.current.focus();
                  }
                } else {
                  inputRef2?.current?.focus();
                }
              }}
              style={VerifyOTPStyles.OTPBox}
            />
            <TextInput
              keyboardType={'numeric'}
              value={input4}
              ref={inputRef4}
              inputMode="numeric"
              maxLength={1}
              onChangeText={e => {
                setInput4(e);
                if (e.length == 0) {
                  if (inputRef3.current) {
                    inputRef3.current.focus();
                  }
                }
              }}
              style={VerifyOTPStyles.OTPBox}
            />
          </View>
        </View>
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
            title={loading ? 'Loading...' : 'Validate OTP'}
            onPress={submitHandler}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 40,
            justifyContent: 'center',
          }}>
          <Text>Didn’t receive the OTP? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: COLORS.primary}}> Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </AuthPage>
    </View>
  );
};

export default VerifyOtp;
