import {useState} from 'react';

export const useDoctorUnavailability = () => {
  const [startTimePickerVisible, setStartTimePickerVisibility] =
    useState(false);
  const [endTimePickerVisible, setEndTimePickerVisibility] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState<Date | string>(
    'Select Start Time',
  );
  const [selectedEndTime, setSelectedEndTime] = useState<Date | string>(
    'Select End Time',
  );
  const showStartTimePicker = () => {
    setStartTimePickerVisibility(true);
  };
  const hideStartTimePicker = () => {
    setStartTimePickerVisibility(false);
  };
  const showEndTimePicker = () => {
    setEndTimePickerVisibility(true);
  };
  const hideEndTimePicker = () => {
    setEndTimePickerVisibility(false);
  };
  const handleStartTimeConfirm = (date: Date) => {
    console.log('A Date has been Picked', date);
    setSelectedStartTime(date);
    hideStartTimePicker();
  };
  const handleEndTimeConfirm = (date: Date) => {
    console.log('A Date has been Picked', date.toTimeString());
    setSelectedEndTime(date);
    hideEndTimePicker();
  };
  const handleSubmitUnavailability = (selectedDate: Date) => {
    console.log(
      'Start Time is',
      selectedStartTime,
      'End Time is',
      selectedEndTime,
      'Date is',
      selectedDate,
    );
  };
  return {
    startTimePickerVisible,
    setStartTimePickerVisibility,
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
