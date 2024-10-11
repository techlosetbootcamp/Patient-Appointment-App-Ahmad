import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';
import {useSplash} from './useSplash';
export default function Splash() {
  useSplash();
  return (
    <View style={{backgroundColor: '#1EB6B9', flex: 1}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View
        style={{
          flex: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          width={1000}
          height={169}
          style={{width: 225, height: 169}}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <View style={{flex: 1}} />
    </View>
  );
}
