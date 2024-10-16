import {useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {RootStackParamList, VerifyOTPRouteProps} from '../../../../types/Types';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useMutation} from '@apollo/client';
import {LOGIN_WITH_PHONE_NO} from '../../../../graphql/mutations/loginWithPhoneNo';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useVerifyOTP = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [errorState, setErrorState] = useState('');
  const inputRef1 = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const inputRef3 = useRef<TextInput>(null);
  const inputRef4 = useRef<TextInput>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<VerifyOTPRouteProps>();
  const {phoneNo} = route.params;
  const otp = {input1, input2, input3, input4};
  const stringOtp = Object.values(otp).join('');

  const [LoginWithPhoneNo, {data, loading, error}] = useMutation(
    LOGIN_WITH_PHONE_NO,
    {
      onCompleted: async (data, clientOptions) => {
        console.log('LOGINWITHPHONENO', data);
        const token = data?.LoginWithEmail;
        if (token) {
          try {
            await AsyncStorage.setItem('authToken', token);
          } catch (error) {
            console.log('Error while setting token in async Storage');
            setErrorState('Something went wrong');
          }
        }
        Toast.show({
          type: 'success',
          text1: 'Successfully login',
        });
        setErrorState('');
      },
      onError(error, clientOptions) {
        console.log('Error', error);
        setErrorState(error.message);
      },
    },
  );
  console.log('PhoneNo From Verify Otp', phoneNo);
  const submitHandler = () => {
    try {
      if (stringOtp.length < 4) {
        setErrorState('Otp must be 4 charcters long!');
        return;
      }
      LoginWithPhoneNo({
        variables: {
          phoneNo,
          userOtp: stringOtp,
        },
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
      });
    }
  };
  return {
    input1,
    input2,
    input3,
    input4,
    setInput1,
    setInput2,
    setInput3,
    setInput4,
    inputRef1,
    inputRef2,
    inputRef3,
    inputRef4,
    submitHandler,
    navigation,
    errorState,
    loading,
  };
};
