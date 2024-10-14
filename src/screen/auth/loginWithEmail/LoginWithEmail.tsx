import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AuthPage from '../../../components/authPage/AuthPage';
import Input from '../../../components/input/Input';
import {COLORS} from '../../../constants/colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Button from '../../../components/button/Button';
import {RootStackParamList} from '../../../types/Types';
import {useLoginWithEmail} from './useLoginWithEmail';

const LoginWithEmail = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    submitHandler,
    errorState,
    loading,
  } = useLoginWithEmail();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <AuthPage title="Login With Email">
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

        <TouchableOpacity
          style={{display: 'flex', alignItems: 'flex-end', marginTop: 10}}
          onPress={() => navigation.navigate('forgotPassword')}>
          <Text style={{color: COLORS.primary}}>Forgot Password?</Text>
        </TouchableOpacity>

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
        <View style={{marginTop: '15%'}}>
          <Button
            title={loading ? 'Loading...' : 'Login'}
            onPress={submitHandler}
          />
        </View>
        <View style={{flex: 1, bottom: '5%', justifyContent: 'flex-end'}}>
          <Button
            title="Login With Phone Number"
            onPress={() => navigation.navigate('LoginWithPhoneNo')}
            bgTransparent
            textSecondry
            borderPrimary
          />
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
        </View>
      </AuthPage>
    </View>
  );
};
export default LoginWithEmail;
