import {View, Text} from 'react-native';
import React from 'react';
import AuthPage from '../../../components/authPage/AuthPage';
import Input from '../../../components/input/Input';
import {useForgotPassword} from './useForgotPassword';
import Button from '../../../components/button/Button';

const ForgotPassword = () => {
  const {email, setEmail} = useForgotPassword();
  return (
    <View style={{flex: 1}}>
      <AuthPage title="Forgot Password" goBack>
        <Input label="Email" value={email} onChangeText={setEmail} />
        <View style={{marginTop: '10%'}}>
          <Button title="Send" />
        </View>
      </AuthPage>
    </View>
  );
};

export default ForgotPassword;
