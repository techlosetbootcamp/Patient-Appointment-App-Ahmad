import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/header/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Button from '../../../components/button/Button';
import {useDoctorAvailability} from './useDoctorAvailability';
import Modal from '../../../components/Modal/Modal';
import {COLORS} from '../../../constants/colors';
const DoctorAvailability = () => {
  const {
    endTimePickerVisible,
    handleEndTimeConfirm,
    handleStartTimeConfirm,
    hideEndTimePicker,
    hideStartTimePicker,
    selectedEndTime,
    selectedStartTime,
    showEndTimePicker,
    showStartTimePicker,
    startTimePickerVisible,
    handleSubmitUnavailability,
    navigation,
  } = useDoctorAvailability();
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
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <View style={{flex: 1}}>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        headerText="Availabilty Hours Added">
        {/* <View
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingBottom: 20,
            justifyContent: 'center',
          }}>
          <View style={{width: '50%', paddingVertical: 15}}>
            <Text style={{textAlign: 'center'}}>
              Availabilty Added Successfully from:{'\n'}
            </Text>
            <Text
              style={{
                color: COLORS.primary,
                textAlign: 'center',
                padding: 0,
                margin: 0,
              }}>
              {startTime} to {endTime}
            </Text>
          </View>
          <TouchableOpacity style={{width: '30%'}}>
            <Button title="Close" decreaseHeight onPress={closeModal} />
          </TouchableOpacity>
        </View> */}
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingBottom: 20,
            justifyContent: 'center',
          }}>
          {/* Centered Content */}
          <View style={{width: '80%', paddingVertical: 15}}>
            <Text style={{textAlign: 'center', fontSize: 16}}>
              Availability Added Successfully from:
            </Text>
            <Text
              style={{
                color: COLORS.primary,
                textAlign: 'center',
                fontSize: 16,
                paddingTop: 10, // Adjust for better spacing
              }}>
              {startTime && `${startTime} to ${endTime}`}
            </Text>
          </View>

          {/* Close Button */}
          <TouchableOpacity style={{width: '50%'}}>
            <Button title="Close" decreaseHeight onPress={closeModal} />
          </TouchableOpacity>
        </View>
      </Modal>
      <Header>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
              Add Availability
            </Text>
          </View>
        </View>
      </Header>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <View
          style={{
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
          <View
            style={{marginVertical: 15, display: 'flex', alignItems: 'center'}}>
            <Text>TO</Text>
          </View>
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
            title="Add Availabilty"
            onPress={() => {
              handleSubmitUnavailability(openModal);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DoctorAvailability;
