import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Button from '../../components/button/Button';
import {logout} from '../../utils/logout';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/Types';
import {COLORS} from '../../constants/colors';

const Doctor = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  <StatusBar backgroundColor={COLORS.primary} />;
  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <View style={{marginTop: 20}}>
        <Button title="Logout" onPress={() => logout(navigation)} />
      </View>
    </View>
  );
};

export default Doctor;
