import {useMutation} from '@apollo/client';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {RESET_PASSWORD} from '../../../../graphql/mutations/forgotPassword';
import {RootStackParamList} from '../../../../types/Types';

export const useForgotPasswordOtp = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  const [errorState, setErrorState] = useState('');
  const inputRef1 = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const inputRef3 = useRef<TextInput>(null);
  const inputRef4 = useRef<TextInput>(null);
  const inputRef5 = useRef<TextInput>(null);
  const inputRef6 = useRef<TextInput>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const otpData = {input1, input2, input3, input4, input5, input6};
  const otpString = Object.values(otpData).join('');
  const [resetPassword, {loading, data}] = useMutation(RESET_PASSWORD, {
    onCompleted(data, clientOptions) {
      navigation.navigate('NewPassword', {forgotPasswordOtp: otpString});
    },
    onError(error, clientOptions) {
      console.log('Error', error);
      setErrorState(error.message);
    },
  });

  const verifyOtp = () => {
    try {
      resetPassword({
        variables: {
          token: otpString,
        },
      });
    } catch (error) {
      setErrorState('Something went wrong');
      console.log('Error', error);
    }
  };

  return {
    input1,
    input2,
    input3,
    input4,
    input5,
    input6,
    setInput1,
    setInput2,
    setInput3,
    setInput4,
    setInput5,
    setInput6,
    inputRef1,
    inputRef2,
    inputRef3,
    inputRef4,
    inputRef5,
    inputRef6,
    verifyOtp,
    errorState,
  };
};
