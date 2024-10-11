import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {COLORS} from '../../constants/colors';

interface PhoneNumberInputProps {
  label: string;
  onChange: (phoneNumber: string) => void;
  value: number;
  showValidation?: boolean;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  label = 'Add Data',
  onChange,
  value,
  showValidation = true,
}) => {
  const [isValid, setIsValid] = useState(true);
  const phoneInputRef = useRef<PhoneInput>(null);

  const handleInputChange = (text: string) => {
    const checkValid = phoneInputRef.current?.isValidNumber(text);
    setIsValid(!!checkValid);

    const fullPhoneNumber =
      phoneInputRef.current?.getNumberAfterPossiblyEliminatingZero();

    if (fullPhoneNumber?.formattedNumber) {
      onChange(fullPhoneNumber.formattedNumber);
    } else {
      onChange(text);
    }
  };

  return (
    <View style={{marginTop: 12}}>
      <Text style={[styles.label]}>{label}</Text>
      <PhoneInput
        ref={phoneInputRef}
        defaultCode="PK"
        layout="second"
        value={value.toString()}
        onChangeText={handleInputChange}
        flagButtonStyle={styles.flagButtonStyle}
        containerStyle={styles.containerStyle}
        textInputStyle={styles.textInputStyle}
        textContainerStyle={styles.textContainerStyle}
      />

      {showValidation && !isValid && (
        <Text style={styles.errorText}>Invalid phone number</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: COLORS.primary,
    marginBottom: 10,
  },
  containerStyle: {
    height: 50,
    width: '100%',
    paddingHorizontal: 0,
  },
  flagButtonStyle: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: COLORS.inputBg,
  },
  textInputStyle: {
    height: 50,
    backgroundColor: COLORS.inputBg,
    paddingHorizontal: 0,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainerStyle: {
    backgroundColor: COLORS.inputBg,
    paddingHorizontal: 0,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default PhoneNumberInput;
