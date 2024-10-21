import {View, Text} from 'react-native';
import React from 'react';
import Button from '../../components/button/Button';
import {logout} from '../../utils/logout';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/Types';

const Patient = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  // const handleLogout = async () => {
  //   try {
  //     // Remove the token from AsyncStorage
  //     await AsyncStorage.removeItem('authToken');
  //     console.log('Logged out successfully');
  //     // Navigate to the login screen
  //     navigation.reset({
  //       index: 0,
  //       routes: [{name: 'LoginScreen'}], // Replace 'LoginScreen' with your actual login route
  //     });
  //   } catch (error) {
  //     console.log('Error logging out:', error);
  //   }
  // };

  return (
    <View>
      <Text>Patient</Text>

      <Button
        title="Logout"
        bgTransparent
        borderSecondry
        textSecondry
        onPress={() => logout(navigation)}></Button>
    </View>
  );
};

export default Patient;
