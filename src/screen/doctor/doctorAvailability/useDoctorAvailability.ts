import {useState} from 'react';
import {selectStartAndEndTime} from '../../../utils/selectStartAndEndTime';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '../../../types/Types';

export const useDoctorAvailability = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [startTimePickerVisible, setStartTimePickerVisible] = useState(false);
  const [endTimePickerVisible, setEndTimePickerVisibility] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState<Date | string>(
    'Select Start Time',
  );
  const [selectedEndTime, setSelectedEndTime] = useState<Date | string>(
    'Select End Time',
  );

  const {
    handleEndTimeConfirm,
    handleStartTimeConfirm,
    hideEndTimePicker,
    hideStartTimePicker,
    showEndTimePicker,
    showStartTimePicker,
  } = selectStartAndEndTime({
    startTimePickerVisible,
    setStartTimePickerVisible,
    endTimePickerVisible,
    setEndTimePickerVisibility,
    selectedStartTime,
    selectedEndTime,
    setSelectedEndTime,
    setSelectedStartTime,
  });
  const handleSubmitUnavailability = (openModal: () => void) => {
    try {
      console.log(
        'Start Time is',
        selectedStartTime,
        'End Time is',
        selectedEndTime,
      );
      openModal();
    } catch (error) {
      console.warn('Something went wrong!');
    }
  };
  return {
    startTimePickerVisible,

    endTimePickerVisible,
    navigation,
    showStartTimePicker,
    showEndTimePicker,
    handleStartTimeConfirm,
    handleEndTimeConfirm,
    hideStartTimePicker,
    hideEndTimePicker,
    selectedEndTime,
    selectedStartTime,
    handleSubmitUnavailability,
  };
};
