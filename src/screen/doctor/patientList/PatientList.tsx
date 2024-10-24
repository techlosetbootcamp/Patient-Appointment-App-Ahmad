import React, {useRef, useState} from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import {appointments} from '../../../components/appointmentsList/AppointmentsList';
import AppointmentInfo from '../../../components/appointmentsList/appointmentInfo/AppointmentInfo';
import {AppointmentInfoType, RootStackParamList} from '../../../types/Types';
import PatientsFilterModal from '../../../components/patientsFilterModal/PatientsFilterModal';
import Header from '../../../components/header/Header';
import {COLORS} from '../../../constants/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import SegmentedControl from '../../../components/segmentedControl/SegmentedControl';
import {usePatientList} from './usePatientList';

const PatientList = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const opacity = useRef(new Animated.Value(0)).current;
  const {Genders, AgeRange} = usePatientList();
  const [genderSelectedOption, setGenderSelectedOption] = useState('');
  const [ageSelectedOption, setAgeSelectedOption] = useState('');
  const [maxage, setMaxAge] = useState(0);
  const [minage, setMinAge] = useState(0);

  const fadeIn = () => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };
  const filterSubmitHandler = () => {
    console.log(genderSelectedOption, minage, maxage);
  };
  return (
    <View style={{flex: 1, position: 'relative'}}>
      {visible && (
        <Animated.View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            zIndex: 2,
            opacity,
          }}
        />
      )}
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={COLORS.primary} />
        <Header>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: 'white',
                letterSpacing: 0.5,
              }}>
              Patient List
            </Text>
            <View style={{display: 'flex', flexDirection: 'row', gap: 24}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SearchPatients')}
                activeOpacity={0.5}>
                <Feather name="search" size={22} color={'white'} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setVisible(true), fadeIn();
                }}
                activeOpacity={0.5}>
                <Feather name="filter" size={22} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        </Header>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingTop: 15,
          }}>
          <FlatList
            data={appointments}
            renderItem={({item}: {item: AppointmentInfoType}) => (
              <AppointmentInfo
                age={item?.age}
                name={item?.name}
                profilePicture={item.profilePicture}
                id={item?.id}
                onPress={() => {
                  navigation.navigate('PatientProfileInfo', {id: item?.id});
                }}
              />
            )}
            showsVerticalScrollIndicator={false}
          />

          <PatientsFilterModal visible={visible} setVisible={setVisible}>
            <Text style={{fontSize: 16, fontWeight: '700', marginBottom: 15}}>
              Gender
            </Text>
            <SegmentedControl
              options={Genders.map(gender => gender.display)}
              selectedOption={genderSelectedOption}
              onOptionPress={setGenderSelectedOption}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                marginBottom: 15,
                marginTop: 15,
              }}>
              Age Range
            </Text>
            <SegmentedControl
              options={AgeRange.map(age => age.display)}
              selectedOption={ageSelectedOption}
              onOptionPress={selectedDisplay => {
                const selectedAgeRange = AgeRange.find(
                  age => age.display === selectedDisplay,
                );
                if (selectedAgeRange) {
                  const maxage = selectedAgeRange.maxAge;
                  const minage = selectedAgeRange.minAge;
                  setMaxAge(maxage);
                  setMinAge(minage);
                  setAgeSelectedOption(selectedDisplay);
                }
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 32,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setAgeSelectedOption('');
                  setGenderSelectedOption('');
                }}
                style={{
                  paddingVertical: 12,
                  borderWidth: 1,
                  borderColor: COLORS.grayC,
                  flexBasis: '47%',
                  borderRadius: 5,
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <Text>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={filterSubmitHandler}
                style={{
                  paddingVertical: 12,
                  backgroundColor: COLORS.primary,
                  flexBasis: '47%',
                  borderRadius: 5,
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}>Apply</Text>
              </TouchableOpacity>
            </View>
          </PatientsFilterModal>
        </View>
      </View>
    </View>
  );
};

export default PatientList;
