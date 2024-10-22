import {RouteProp} from '@react-navigation/native';
import {IconProps} from 'react-native-vector-icons/Icon';
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
  SearchAppointments: undefined;
  SearchPatients: undefined;
  DoctorUnavailability: undefined;
  DoctorAvailability: undefined;
  AddDoctorInfo: undefined;
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
  padding?: boolean;
  decreaseHeight?: boolean;
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
  label: string;
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
export type BottomTabTypes = {
  focused: boolean;
  title: string;
  IconProps: React.ComponentType<any>;
  iconName: string;
};
export enum AppointmentStatus {
  UPCOMING = 'UPCOMING',
  IN_PROGRESS = 'IN_PROGRESS',
  MISSED = 'MISSED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}
export type AppointmentInfoType = {
  profilePicture?: string;
  name?: string;
  age?: string;
  appointmentTime?: string;
  status?: AppointmentStatus;
};
export type PatientsFilterModalProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};
export type SegmentedControlProps = {
  options: string[];
  selectedOption: string;
  onOptionPress?: (option: string) => void;
};
export type selectStartAndEndTimeProps = {
  startTimePickerVisible: boolean;
  endTimePickerVisible: boolean;
  setStartTimePickerVisible: (visible: boolean) => void;
  setEndTimePickerVisibility: (visible: boolean) => void;
  selectedStartTime: Date | string;
  selectedEndTime: Date | string;
  setSelectedStartTime: (time: Date | string) => void;
  setSelectedEndTime: (time: Date | string) => void;
};
export type modalProps = {
  isOpen: boolean;
  setIsOpen: (visible: boolean) => void;
  headerText: string;
  children: React.ReactNode;
};
