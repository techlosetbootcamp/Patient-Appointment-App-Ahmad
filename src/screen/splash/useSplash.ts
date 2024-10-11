import {
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {useEffect} from 'react';
import {RootStackParamList} from '../../types/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSplash = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const appData = await AsyncStorage.getItem('isOnboardingCompleted');
        if (appData === null) {
          navigation.dispatch(StackActions.replace('OnBoarding'));
        } else {
          navigation.dispatch(StackActions.replace('LoginWithPhoneNo'));
        }
      } catch (error) {
        console.error('Error checking first launch:', error);
      }
    };
    checkFirstLaunch();
  }, [navigation]);
};
