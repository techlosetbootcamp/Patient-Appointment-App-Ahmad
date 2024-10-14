import {useMutation} from '@apollo/client';
import {useState} from 'react';
import {LOGIN_WITH_EMAIL} from '../../../graphql/mutations/loginWithEmail';
import Toast from 'react-native-toast-message';
enum Role {
  DOCTOR = 'DOCTOR',
  PATIENT = 'PATIENT',
}
export const useLoginWithEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorState, setErrorState] = useState('');
  const [LoginWithEmail, {loading, data, error}] = useMutation(
    LOGIN_WITH_EMAIL,
    {
      onCompleted(data, clientOptions) {
        console.log('User Login', data);
        Toast.show({type: 'success', text1: 'Login Successfully'});
        setErrorState('');
      },
      onError(error, clientOptions) {
        setErrorState(error.message);
        console.log('Error While Login With Email', error);
      },
    },
  );
  const submitHandler = () => {
    LoginWithEmail({
      variables: {
        email,
        password,
      },
    });
    console.log('Data', {email, password});
    setErrorState('');
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
