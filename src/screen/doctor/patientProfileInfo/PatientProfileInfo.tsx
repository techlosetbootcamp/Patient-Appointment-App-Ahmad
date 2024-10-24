import {View, Text} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/Types';
import Header from '../../../components/header/Header';

const PatientProfileInfo = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'PatientProfileInfo'>>();
  const {id} = route?.params;
  return (
    <View style={{flex: 1}}>
      <Header goBack headerText="Patient Profile" />
      <Text>{id}</Text>
    </View>
  );
};

export default PatientProfileInfo;
