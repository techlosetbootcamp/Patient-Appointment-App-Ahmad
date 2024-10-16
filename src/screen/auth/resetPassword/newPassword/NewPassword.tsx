import {View, Text} from 'react-native';
import React from 'react';
import {useNewPassword} from './useNewPassword';
import AuthPage from '../../../../components/authPage/AuthPage';
import Input from '../../../../components/input/Input';
import Button from '../../../../components/button/Button';

const NewPassword = () => {
  const {changePassword, errorState, newPassword, setNewPassword} =
    useNewPassword();
  return (
    <View style={{flex: 1}}>
      <AuthPage title="New Password" goBack>
        <Input
          label="Enter New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          isPassword
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
          <Button onPress={changePassword} title="Change Password" />
        </View>
      </AuthPage>
    </View>
  );
};

export default NewPassword;
