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
  verifyOTP: undefined;
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
export type InputTypes = {
  label: string;
  labelSecondryColor?: boolean;
  value: string;
  onChangeText: (text: string) => void;
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
