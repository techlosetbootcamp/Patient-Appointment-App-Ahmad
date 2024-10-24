import {useState} from 'react';
import {selectStartAndEndTime} from '../../../utils/selectStartAndEndTime';

export const useDoctorUnavailability = () => {
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
  // const showStartTimePicker = () => {
  //   setStartTimePickerVisibility(true);
  // };
  // const hideStartTimePicker = () => {
  //   setStartTimePickerVisibility(false);
  // };
  // const showEndTimePicker = () => {
  //   setEndTimePickerVisibility(true);
  // };
  // const hideEndTimePicker = () => {
  //   setEndTimePickerVisibility(false);
  // };
  // const handleStartTimeConfirm = (date: Date) => {
  //   console.log('A Date has been Picked', date);
  //   setSelectedStartTime(date);
  //   hideStartTimePicker();
  // };
  // const handleEndTimeConfirm = (date: Date) => {
  //   console.log('A Date has been Picked', date.toTimeString());
  //   setSelectedEndTime(date);
  //   hideEndTimePicker();
  // };
  const handleSubmitUnavailability = (selectedDate: string) => {
    const date = `${selectedDate}T00:00:00.000Z`;
    console.log(
      'Start Time is',
      selectedStartTime,
      'End Time is',
      selectedEndTime,
      'Date is',
      date,
    );
  };
  return {
    startTimePickerVisible,
    setStartTimePickerVisible,
    endTimePickerVisible,
    setEndTimePickerVisibility,
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
