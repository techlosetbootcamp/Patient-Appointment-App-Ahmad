import { useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import Toast from 'react-native-toast-message';
import { LOGIN_WITH_EMAIL } from '../../../graphql/mutations/loginWithEmail';
import { RootStackParamList } from '../../../types/Types';
enum Role {
  DOCTOR = 'DOCTOR',
  PATIENT = 'PATIENT',
}
export const useLoginWithEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorState, setErrorState] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [LoginWithEmail, {loading, data, error}] = useMutation(
    LOGIN_WITH_EMAIL,
    {
      onCompleted: async (data, clientOptions) => {
        console.log('User Login', data?.LoginWithEmail);
        const token = data?.LoginWithEmail;
        if (token) {
          try {
            await AsyncStorage.setItem('authToken', token);
            navigation.replace('Home');
          } catch (error) {
            console.log(
              'Error while setting token in async Storage login with mobile',
            );
            setErrorState('Something went wrong');
          }
        }

        Toast.show({
          type: 'success',
          text1: 'Login Successfully',
        });
        setErrorState('');
      },
      onError(error, clientOptions) {
        setErrorState(error.message);
        console.log('Error While Login With Email', error);
      },
    },
  );

  const submitHandler = () => {
    try {
      LoginWithEmail({
        variables: {
          email,
          password,
        },
      });
      console.log('Data', {email, password});
      setErrorState('');
    } catch (error) {
      console.log('Error While login with email', error);
      setErrorState('Something went wrong!');
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    submitHandler,
    errorState,
    loading,
  };
};
