import {View, Text} from 'react-native';
import React from 'react';
import AuthPage from '../../../../components/authPage/AuthPage';
import Input from '../../../../components/input/Input';
import {useSendResetPasswordOtp} from './useSendResetPasswordOtp';
import Button from '../../../../components/button/Button';

const ForgotPassword = () => {
  const {email, setEmail, handleSend, errorState, loading} =
    useSendResetPasswordOtp();
  return (
    <View style={{flex: 1}}>
      <AuthPage title="Forgot Password" goBack>
        <Input
          label="Email"
          inputMode="email"
          value={email}
          onChangeText={setEmail}
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
        <View style={{marginTop: '10%'}}>
          <Button
            title={loading ? 'Loading...' : 'Send'}
            onPress={handleSend}
          />
        </View>
        <View style={{display: 'flex', alignItems: 'center', marginTop: 15}}>
          <Text style={{textAlign: 'center', width: '80%'}}>
            After providing email a OTP will sent on your Email
          </Text>
        </View>
      </AuthPage>
    </View>
  );
};

export default ForgotPassword;
