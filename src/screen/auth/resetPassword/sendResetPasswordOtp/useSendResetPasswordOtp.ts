import {useMutation} from '@apollo/client';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import Toast from 'react-native-toast-message';
import {SEND_RESET_PASSWORD_OTP} from '../../../../graphql/mutations/forgotPassword';
import {RootStackParamList} from '../../../../types/Types';

export const useSendResetPasswordOtp = () => {
  const [email, setEmail] = useState('');
  const [errorState, setErrorState] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [sentResetPasswordOtp, {loading, data, error}] = useMutation(
    SEND_RESET_PASSWORD_OTP,
    {
      onCompleted(data, clientOptions) {
        Toast.show({
          type: 'info',
          text1: 'OTP Sent on your email',
        });
        navigation.navigate('ForgotPasswordOtp');
        setErrorState('');
      },
      onError(error, clientOptions) {
        console.log('Error on Forgot password', error);
        setErrorState(error.message);
      },
    },
  );

  const handleSend = () => {
    console.log('Email', email);
    try {
      sentResetPasswordOtp({
        variables: {
          email,
        },
      });

      setErrorState('');
    } catch (error) {
      console.log('Error on forgot password', error);

      setErrorState('Something went wrong!');
    }
  };
  return {email, setEmail, handleSend, errorState, loading};
};
