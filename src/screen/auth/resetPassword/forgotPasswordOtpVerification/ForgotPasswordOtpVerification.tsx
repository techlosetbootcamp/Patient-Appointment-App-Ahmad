import {View, Text, TextInput} from 'react-native';
import React from 'react';
import AuthPage from '../../../../components/authPage/AuthPage';
import {useForgotPasswordOtp} from './useForgotPasswordOtpVerification';

import {ForgotPasswordStyles} from './ForgotPasswordOtpStylesVerification';
import {COLORS} from '../../../../constants/colors';
import Button from '../../../../components/button/Button';

const ForgotPasswordOtp = () => {
  const {
    input1,
    input2,
    input3,
    input4,
    input5,
    input6,
    inputRef1,
    inputRef2,
    inputRef3,
    inputRef4,
    inputRef5,
    inputRef6,
    setInput1,
    setInput2,
    setInput3,
    setInput4,
    setInput5,
    setInput6,
    verifyOtp,
    errorState,
  } = useForgotPasswordOtp();

  return (
    <View style={{flex: 1}}>
      <AuthPage title="OTP Verification" goBack>
        <View style={{marginTop: 8}}>
          <Text style={[{color: COLORS.primary, marginBottom: 10}]}>
            Enter OTP
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
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
              style={ForgotPasswordStyles.OTPBox}
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
              style={ForgotPasswordStyles.OTPBox}
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
                  if (inputRef4?.current) {
                    inputRef4?.current.focus();
                  }
                } else {
                  inputRef2?.current?.focus();
                }
              }}
              style={ForgotPasswordStyles.OTPBox}
            />
            <TextInput
              keyboardType={'numeric'}
              value={input4}
              ref={inputRef4}
              maxLength={1}
              inputMode="numeric"
              onChangeText={e => {
                setInput4(e);
                if (e.length >= 1) {
                  if (inputRef5?.current) {
                    inputRef5?.current.focus();
                  }
                } else {
                  inputRef3?.current?.focus();
                }
              }}
              style={ForgotPasswordStyles.OTPBox}
            />
            <TextInput
              keyboardType={'numeric'}
              value={input5}
              ref={inputRef5}
              maxLength={1}
              inputMode="numeric"
              onChangeText={e => {
                setInput5(e);
                if (e.length >= 1) {
                  if (inputRef6?.current) {
                    inputRef6?.current.focus();
                  }
                } else {
                  inputRef4?.current?.focus();
                }
              }}
              style={ForgotPasswordStyles.OTPBox}
            />
            <TextInput
              keyboardType={'numeric'}
              value={input6}
              ref={inputRef6}
              maxLength={1}
              inputMode="numeric"
              onChangeText={e => {
                setInput6(e);
                if (e.length <= 0) {
                  if (inputRef5?.current) {
                    inputRef5?.current?.focus();
                  }
                }
              }}
              style={ForgotPasswordStyles.OTPBox}
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
        <View style={{marginTop: '10%'}}>
          <Button title="Verify OTP" onPress={verifyOtp} />
        </View>
      </AuthPage>
    </View>
  );
};

export default ForgotPasswordOtp;
