import {RouteProp} from '@react-navigation/native';
import {
  ImageSourcePropType,
  InputModeOptions,
  KeyboardTypeOptions,
} from 'react-native';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  OnBoarding: undefined;
  LoginWithPhoneNo: undefined;
  LoginWithEmail: undefined;
  Signup: undefined;
  VerifyOTP: {
    phoneNo?: string;
  };
  ForgotPassword: undefined;
  ForgotPasswordOtp: undefined;
  NewPassword: {
    forgotPasswordOtp: string;
  };
  Patient: undefined;
  Doctor: undefined;
};
export type OnBoardingTypes = {
  id: string;
  heading: string;
  subHeading: string;
  image: ImageSourcePropType;
};
export type ButtonProps = {
  title: string;
  onPress: () => void;
  bgPrimary?: boolean;
  bgTransparent?: boolean;
  borderPrimary?: boolean;
  borderSecondry?: boolean;
  textPrimary?: boolean;
  textSecondry?: boolean;
};
export type AuthPageProps = {
  goBack?: boolean;
  title: string;
  description?: string;
  anotherPage?: boolean;
  children: React.ReactNode;
};
export enum Role {
  DOCTOR = 'DOCTOR',
  PATIENT = 'PATIENT',
}
export type InputTypes = {
  label: string;
  labelSecondryColor?: boolean;
  value: string;
  onChangeText: (text: string | Role) => void;
  isPassword?: boolean;
  keyboardType?: KeyboardTypeOptions;
  isWidthHalf?: boolean;
  inputMode?: InputModeOptions;
};
export type PhoneNumberInputTypes = {
  label: string;
  labelSecondryColor?: boolean;
  value: number;
  onChangeText: (text: string) => void;
  keyboardType: KeyboardTypeOptions;
};
export type CountrieType = {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
};
export type DropDownTypes = {
  data: string[];
  isWidthFull?: boolean;
  isWidthHalf?: boolean;
  labelSecondryColor?: boolean;
  selectedValue: string;
  setSelectedValue: (text: string) => void;
};
export type NewPasswordRouteProps = RouteProp<
  RootStackParamList,
  'NewPassword'
>;
export type VerifyOTPRouteProps = RouteProp<RootStackParamList, 'VerifyOTP'>;
export type DecodedToken = {
  role: string;
  email: string;
};
