import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootStackParamList} from '../../types/Types';
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';

export const useOnBoarding = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const onBoardingContent = [
    {
      id: '1',
      image: require('../../assets/images/onBoarding1.png'),
      heading: 'Never miss an appointment !',
      subHeading:
        'App will let you know about all upcoming appointments on time.',
    },
    {
      id: '2',
      image: require('../../assets/images/onBoarding2.png'),
      heading: 'Instantly schedule appointments',
      subHeading: 'Quickly schedule appointments with easy user interface.',
    },
    {
      id: '3',
      image: require('../../assets/images/onBoarding3.png'),
      heading: 'Keep patient records with you !',
      subHeading:
        'App has unique feature to create patient profile and keep all related documents.',
    },
  ];
  const handleGetStarted = async () => {
    try {
      await AsyncStorage.setItem('isOnboardingCompleted', 'true');
      console.log('Getting Started Button Clicked');

      navigation.dispatch(StackActions.replace('LoginWithPhoneNo'));
    } catch (error) {
      console.error('Error storing onboarding status:', error);
    }
  };
  return {onBoardingContent, handleGetStarted};
};
