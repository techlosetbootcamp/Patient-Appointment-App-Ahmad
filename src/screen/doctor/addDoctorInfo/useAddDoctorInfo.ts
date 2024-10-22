import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '../../../types/Types';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

export const useAddDoctorInfo = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const Gender = ['MALE', 'FEMALE', 'OTHERS'];
  const [gender, setGender] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const submitHandler = () => {
    console.log(gender, displayName, address);
  };
  return {
    navigation,
    Gender,
    gender,
    setGender,
    displayName,
    setDisplayName,
    address,
    setAddress,
    submitHandler,
  };
};
