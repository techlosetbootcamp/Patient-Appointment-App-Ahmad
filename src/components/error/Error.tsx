import {View, Text} from 'react-native';
import React from 'react';

const Error = ({error}: {error: any}) => {
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
        <Text style={{textAlign: 'center', color: 'red'}}>{error}</Text>
      </View>
    </View>
  );
};

export default Error;
