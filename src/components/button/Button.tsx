import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';
import {ButtonProps} from '../../types/Types';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  bgPrimary,
  bgTransparent,
  borderPrimary,
  borderSecondry,
  textPrimary,
  textSecondry,
  padding,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          height: 50,
          backgroundColor: COLORS.primary,
          alignItems: 'center',
          borderRadius: 10,
          justifyContent: 'center',
        },
        bgPrimary && {backgroundColor: COLORS.primary},
        bgTransparent && {backgroundColor: 'transparent'},
        borderPrimary && {
          borderWidth: 1,
          borderColor: COLORS.primary,
          borderRadius: 10,
        },
        borderSecondry && {
          borderWidth: 1,
          borderColor: COLORS.secondry,
          borderRadius: 10,
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          {color: 'white', fontWeight: '600'},
          padding && {
            paddingHorizontal: 20,
          },
          textPrimary && {
            color: COLORS.primary,
          },
          textSecondry && {
            color: COLORS.secondry,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
