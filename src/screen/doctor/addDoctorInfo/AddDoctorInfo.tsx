import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../../components/button/Button';
import DropDown from '../../../components/dropDown/DropDown';
import Header from '../../../components/header/Header';
import Input from '../../../components/input/Input';
import {useAddDoctorInfo} from './useAddDoctorInfo';

const AddDoctorInfo = () => {
  const {
    navigation,
    Gender,
    gender,
    setGender,
    address,
    displayName,
    setAddress,
    setDisplayName,
    submitHandler,
    isLoading,
    errorState,
  } = useAddDoctorInfo();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={{backgroundColor: 'white'}} bounces={false}>
        <View style={{backgroundColor: 'white', height: '100%'}}>
          <Header goBack headerText="Add info" />

          <View style={{flex: 1, marginTop: 20, paddingHorizontal: 20}}>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 75,
                  height: 75,
                  borderWidth: 1,
                  borderRadius: 50,
                  position: 'relative',
                  borderColor: 'gray',
                }}>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    width: 20,
                    height: 20,
                    backgroundColor: 'green',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                    bottom: 0,
                    right: 0,
                  }}>
                  <Feather name="plus" size={15} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Input
                label="Profile Display Name"
                inputMode="text"
                value={displayName}
                onChangeText={setDisplayName}
              />
              <Input
                label="Address"
                inputMode="text"
                value={address}
                onChangeText={setAddress}
              />
              <DropDown
                data={Gender}
                selectedValue={gender}
                setSelectedValue={setGender}
                label="Gender"
              />
              {errorState && <Text style={{color: 'red'}}>{errorState}</Text>}
            </View>

            <View
              style={{
                marginTop: '20%',
              }}>
              <View>
                <Button
                  title={isLoading ? 'Loading...' : 'Add Info'}
                  onPress={submitHandler}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddDoctorInfo;
