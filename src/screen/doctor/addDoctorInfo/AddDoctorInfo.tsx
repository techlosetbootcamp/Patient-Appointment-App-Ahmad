import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../../components/header/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useAddDoctorInfo} from './useAddDoctorInfo';
import Input from '../../../components/input/Input';
import DropDown from '../../../components/dropDown/DropDown';
import Button from '../../../components/button/Button';

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
  } = useAddDoctorInfo();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={{backgroundColor: 'white'}} bounces={false}>
        <View style={{backgroundColor: 'white', height: '100%'}}>
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
                  Add Info
                </Text>
              </View>
            </View>
          </Header>
          <View style={{flex: 1, marginVertical: 10, paddingHorizontal: 20}}>
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
            </View>
            {/* <Input label="Email" inputMode="email" /> */}
            <View
              style={{
                marginTop: '20%',
              }}>
              <View>
                <Button title="Add Info" onPress={submitHandler} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddDoctorInfo;
