import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {doctorInfo, RootStackParamList} from '../../../types/Types';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store';
import {addDoctorInfo} from '../../../redux/slices/AddDoctorInfoSlice';
import Toast from 'react-native-toast-message';
import {useCurrentUserInfo} from '../../../utils/currentUserInfo';

export const useAddDoctorInfo = () => {
  const {email} = useCurrentUserInfo();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const Gender = ['MALE', 'FEMALE', 'OTHERS'];
  const [gender, setGender] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [errorState, setErrorState] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const {error, isLoading} = useSelector(
    (state: RootState) => state.addDoctorInfo,
  );
  const data: doctorInfo = {
    gender,
    name: displayName,
    address,
    email,
  };

  // Reset error on component unmount
  useEffect(() => {
    return () => {
      setErrorState(null); // Reset the error when the component unmounts
    };
  }, []);

  const submitHandler = () => {
    dispatch(addDoctorInfo(data));
    setErrorState(error);
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
    isLoading,
    error,
    errorState,
  };
};
