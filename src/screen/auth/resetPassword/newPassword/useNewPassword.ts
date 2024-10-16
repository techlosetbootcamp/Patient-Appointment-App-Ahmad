import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useState} from 'react';
import {
  NewPasswordRouteProps,
  RootStackParamList,
} from '../../../../types/Types';
import {useMutation} from '@apollo/client';
import {RESET_PASSWORD} from '../../../../graphql/mutations/forgotPassword';
import Toast from 'react-native-toast-message';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

export const useNewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [errorState, setErrorState] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [resetPassword, {data, error, loading}] = useMutation(RESET_PASSWORD, {
    onCompleted(data, clientOptions) {
      Toast.show({
        type: 'success',
        text1: 'Password changed successfully',
      });
      navigation.replace('LoginWithEmail');
    },
    onError(error, clientOptions) {
      console.log('Error', error);
      setErrorState(error.message);
    },
  });
  const route = useRoute<NewPasswordRouteProps>();
  const {forgotPasswordOtp} = route.params;
  const changePassword = () => {
    console.log(newPassword, forgotPasswordOtp);
    try {
      resetPassword({
        variables: {
          token: forgotPasswordOtp,
          newPassword,
        },
      });
    } catch (error) {
      console.log('Error', error);

      Toast.show({
        type: 'error',
        text1: 'Something went wrong!',
      });
    }
  };
  return {
    newPassword,
    setNewPassword,
    errorState,
    changePassword,
  };
};
