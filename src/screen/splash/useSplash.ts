import {
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {RootStackParamList} from '../../types/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {decodeJwtToken} from '../../utils/decodeJwtToken';
import {StackNavigationProp} from '@react-navigation/stack';

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
            // navigation.dispatch(StackActions.replace(''));
            navigation.replace('Home');
          }
          // navigation.dispatch(StackActions.replace('LoginWithEmail'));
          else {
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
