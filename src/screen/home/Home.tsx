import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';

export default function Home() {
  return (
    <View style={{backgroundColor: COLORS.primary}}>
      <Text>Home</Text>
    </View>
  );
}
