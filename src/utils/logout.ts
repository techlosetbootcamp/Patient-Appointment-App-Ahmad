import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/Types';
import {StackNavigationProp} from '@react-navigation/stack';

export const logout = async (
  navigation: StackNavigationProp<RootStackParamList>,
) => {
  try {
    await AsyncStorage.removeItem('authToken');
    navigation.replace('LoginWithEmail');
    console.log('LogOut Successfulyy');
  } catch (error) {
    console.log('Error While Logout', error);
  }
};
