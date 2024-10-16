import AsyncStorage from '@react-native-async-storage/async-storage';
import {DecodedToken} from '../types/Types';
import {jwtDecode} from 'jwt-decode';

export const decodeJwtToken = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      const decode: DecodedToken = jwtDecode(token);
      return {decode};
    }
    return null;
  } catch (error) {
    console.log('Error decoding JWT token:', error);
    return null;
  }
};
