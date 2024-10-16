import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/colors';

export const ForgotPasswordStyles = StyleSheet.create({
  OTPBox: {
    height: 47,
    backgroundColor: COLORS.inputBg,
    borderRadius: 10,
    width: 47,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  OTPView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
