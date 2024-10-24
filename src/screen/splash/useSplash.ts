import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect} from 'react';
import {RootStackParamList} from '../../types/Types';

export const useSplash = async () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    const checkFirstLaunch = async () => {
      const token = await AsyncStorage.getItem('authToken');
      console.log('TOken From splash Screen', token);

      try {
        const appData = await AsyncStorage.getItem('isOnboardingCompleted');
        if (appData === null) {
          navigation.dispatch(StackActions.replace('OnBoarding'));
        } else {
          if (token) {
            navigation.replace('Home');
          } else {
            navigation.replace('LoginWithEmail');
          }
        }
      } catch (error) {
        console.error('Error checking first launch:', error);
      }
    };
    checkFirstLaunch();
  }, [navigation]);
};
