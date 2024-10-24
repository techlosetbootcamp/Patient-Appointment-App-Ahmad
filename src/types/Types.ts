import {RouteProp} from '@react-navigation/native';
import {IconProps} from 'react-native-vector-icons/Icon';
import {
  ImageSourcePropType,
  InputModeOptions,
  KeyboardTypeOptions,
} from 'react-native';
import {SerializedError} from '@reduxjs/toolkit';

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
  PatientProfileInfo: {
    id: number;
  };
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
  id: number;
  profilePicture?: string;
  name?: string;
  age?: string;
  appointmentTime?: string;
  status?: AppointmentStatus;
  onPress?: () => void;
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
export type headerProps = {
  children?: React.ReactNode;
  goBack?: boolean;
  headerText?: string;
};

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHERS = 'OTHERS',
}
export type getTodayAppointmentsTypes = {
  id: number;
  fullName: string;
  age: string;
  gender: Gender;
  phoneNo: string;
  address: string;
  email: string;
  medicalHistory: string;
  presciptions: [string];
  details?: string;
  scheduledDate?: Date;
  status?: AppointmentStatus;
  startTime: Date;
  endTime: Date;
  doctorId?: string;
  patientId?: string;
};
export type getTodayAppointmentState = {
  appointment: getTodayAppointmentsTypes[] | null;
  isLoading: boolean;
  error: string | null;
};
export type doctorInfo = {
  name: string;
  email?: string;
  gender?: string;
  address?: string;
  profilePhoto?: string;
};
export type doctorInfoState = {
  doctor: doctorInfo | doctorInfo[] | null | undefined;
  isLoading: boolean;
  error: string | null;
};
export type getdoctorInfoState = {
  doctor: doctorInfo | null | undefined;
  isLoading: boolean;
  error: string | null;
};
