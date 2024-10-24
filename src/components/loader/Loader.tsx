import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';

const Loader = ({loading}: {loading: boolean}) => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {loading && <ActivityIndicator color={COLORS.primary} size={40} />}
      </View>
    </View>
  );
};

export default Loader;
