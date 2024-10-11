import {View, Text} from 'react-native';
import React from 'react';
import {InputTypes} from '../../types/Types';
import {COLORS} from '../../constants/colors';
import {TextInput} from 'react-native-gesture-handler';

const Input: React.FC<InputTypes> = ({
  label,
  labelSecondryColor,
  onChangeText,
  value,
  keyboardType,
  isWidthHalf,
  isPassword,
  inputMode,
}) => {
  return (
    <View style={[{marginTop: 8}, isWidthHalf && {width: '48%'}]}>
      <Text
        style={[
          {color: COLORS.primary, marginBottom: 10},
          labelSecondryColor && {color: COLORS.secondry},
        ]}>
        {label}
      </Text>
      <TextInput
        keyboardType={keyboardType}
        value={value}
        inputMode={inputMode}
        onChangeText={onChangeText}
        secureTextEntry={isPassword}
        style={{
          height: 47,
          backgroundColor: COLORS.inputBg,
          borderRadius: 10,
          width: '100%',
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
};

export default Input;
