import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SegmentedControlProps} from '../../types/Types';
import {COLORS} from '../../constants/colors';

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  onOptionPress,
  options,
  selectedOption,
}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%',
        gap: 10,
      }}>
      {options.map((option, Index) => {
        const isSelected = selectedOption === option;
        return (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              onOptionPress?.(option);
            }}
            style={[
              {
                borderWidth: 1,
                borderColor: COLORS.grayC,
                paddingVertical: 6,
                flex: 1,
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexBasis: '30%',
              },
              isSelected && {borderColor: COLORS.primary},
            ]}
            key={Index}>
            <Text
              style={[
                {color: COLORS.grayDark},
                isSelected && {color: COLORS.primary},
              ]}>
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SegmentedControl;
