import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';

const Header = ({children}: {children: React.ReactNode}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 20,
      }}>
      {children}
    </View>
  );
};

export default Header;
