import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../../constants/colors';
import {decodeJwtToken} from '../../utils/decodeJwtToken';
import {useHome} from './useHome';
import Doctor from '../doctor/Doctor';
import Patient from '../patient/Patient';

export default function Home() {
  const {email, role} = useHome();
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      {role === 'DOCTOR' && <Doctor />}
      {role === 'PATIENT' && <Patient />}
    </View>
  );
}
