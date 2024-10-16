import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {RootStackParamList} from '../../../types/Types';
import {useMutation} from '@apollo/client';
import {LOGIN_WITH_PHONE_NO} from '../../../graphql/mutations/loginWithPhoneNo';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLoginWithPhoneNo = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('+92');
  const [errorState, setErrorState] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const phoneNo = `${selectedCountryCode}${phoneNumber}`;

  const [LoginWithPhoneNo, {loading, data, error}] = useMutation(
    LOGIN_WITH_PHONE_NO,
    {
      onCompleted(data, clientOptions) {
        Toast.show({
          type: 'success',
          text1: 'Otp Sent on your phone Number',
        });
        navigation.navigate('VerifyOTP', {phoneNo});
        setErrorState('');
      },
      onError(error, clientOptions) {
        console.log('Error', error);
        setErrorState(error.message);
      },
    },
  );
  const onSubmit = () => {
    try {
      if (!phoneNumber) {
        setErrorState('Please Add Phone Number');
        return;
      }
      const validatePhoneNumber = (phone: string) => {
        const phoneRegex = /^[0-9]{10,15}$/;
        return phoneRegex.test(phone);
      };
      if (!validatePhoneNumber(phoneNumber)) {
        setErrorState(
          'Please enter a valid phone number (10-15 digits, numbers only).',
        );
        return;
      }
      console.log('PhoneNo', phoneNo);

      LoginWithPhoneNo({
        variables: {
          phoneNo,
        },
      });
      setErrorState('');
    } catch (error) {
      console.log('Error', error);
      setErrorState('Something went wrong!');
    }
  };
  return {
    loading,
    onSubmit,
    errorState,
    navigation,
    phoneNumber,
    setPhoneNumber,
    selectedCountryCode,
    setSelectedCountryCode,
  };
};
