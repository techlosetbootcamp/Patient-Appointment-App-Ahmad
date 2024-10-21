import {View, Text} from 'react-native';
import React from 'react';
import {BottomTabTypes} from '../../types/Types';
import {COLORS} from '../../constants/colors';

const BottomTab: React.FC<BottomTabTypes> = ({
  focused,
  title,
  IconProps,
  iconName,
}) => {
  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
      <IconProps
        name={iconName}
        size={28}
        color={focused ? COLORS.primary : COLORS.secondry}
      />
      <Text
        style={{
          marginTop: 5,
          fontSize: 10,
          color: focused ? COLORS.primary : COLORS.secondry,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default BottomTab;
