import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/colors';

export const VerifyOTPStyles = StyleSheet.create({
  OTPBox: {
    height: 57,
    backgroundColor: COLORS.inputBg,
    borderRadius: 10,
    width: 57,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  OTPView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
