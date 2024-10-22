import React, {useEffect, useState} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {Calendar, DateData} from 'react-native-calendars';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../../components/button/Button';
import Header from '../../../components/header/Header';
import {COLORS} from '../../../constants/colors';
import {useDoctorUnavailability} from './useDoctorUnavailability';

const DoctorUnavailability = () => {
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState<string>(today);
  const {
    endTimePickerVisible,
    startTimePickerVisible,
    handleEndTimeConfirm,
    handleStartTimeConfirm,
    showEndTimePicker,
    showStartTimePicker,
    hideEndTimePicker,
    hideStartTimePicker,
    selectedEndTime,
    selectedStartTime,
    handleSubmitUnavailability,
  } = useDoctorUnavailability();
  const startTime = selectedStartTime.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const endTime = selectedEndTime.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <Header>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={26} color={'white'} />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: 'white',
                marginRight: 30,
              }}>
              Select Data & Time
            </Text>
          </View>
        </View>
      </Header>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Calendar
          minDate={today}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: COLORS.primary,
              selectedTextColor: 'white',
            },
          }}
          onDayPress={(day: DateData) => {
            setSelectedDate(day.dateString);
          }}
          renderArrow={(Direction: string) => (
            <AntDesign
              name={Direction === 'left' ? 'left' : 'right'}
              size={24}
              color={COLORS.grayDark}
            />
          )}
          theme={{
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            dayTextColor: 'black',
            arrowStyle: {paddingLeft: 0, paddingRight: 0},
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            marginTop: 40,
          }}>
          <Button
            title={startTime}
            onPress={showStartTimePicker}
            bgTransparent
            borderPrimary
            textSecondry
            padding
          />
          <DateTimePickerModal
            isVisible={startTimePickerVisible}
            mode="time"
            onConfirm={handleStartTimeConfirm}
            onCancel={hideStartTimePicker}
          />

          <Button
            title={endTime}
            onPress={showEndTimePicker}
            bgTransparent
            borderPrimary
            textSecondry
            padding
          />
          <DateTimePickerModal
            isVisible={endTimePickerVisible}
            mode="time"
            onConfirm={handleEndTimeConfirm}
            onCancel={hideEndTimePicker}
          />
        </View>

        <View style={{marginTop: 50}}>
          <Button
            title="Add Unavailabilty"
            onPress={() => {
              handleSubmitUnavailability(selectedDate);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DoctorUnavailability;
