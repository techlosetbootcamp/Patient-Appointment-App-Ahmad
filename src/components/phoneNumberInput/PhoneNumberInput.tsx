import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../constants/colors';
import { countries } from '../../constants/countries';
import { CountrieType } from '../../types/Types';

interface PhoneNumberInputProps {
  label: string;
  onChange: (phoneNumber: string) => void;
  value: string;
  showValidation?: boolean;
  selectedCountryCode?: string;
  setSelectedCountryCode: (code: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  label,
  onChange,
  value,
  showValidation = true,
  selectedCountryCode,
  setSelectedCountryCode,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleCountrySelect = (country: CountrieType) => {
    setSelectedCountryCode(country.dialCode);
    setShowModal(false);
  };

  const Countrie = (item: {item: CountrieType}) => (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
      }}
      onPress={() => handleCountrySelect(item.item)}>
      <Text style={{fontSize: 20}}>{item.item.flag}</Text>
      <Text>{item.item.name}</Text>
      <Text>{item.item.dialCode}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={{marginTop: 12}}>
      <Text style={[styles.label]}>{label}</Text>
      <View
        style={{
          backgroundColor: COLORS.inputBg,
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity
          onPress={handleShowModal}
          style={{borderRightWidth: 2, borderColor: 'gray', height: 20}}>
          <Text style={{marginRight: 15}}>
            <Text>{selectedCountryCode}</Text>
            <MaterialIcons name="arrow-drop-down" />
          </Text>
        </TouchableOpacity>
        <TextInput
          inputMode="tel"
          value={value}
          style={{width: '80%', color: 'gray'}}
          onChangeText={onChange}
        />
      </View>
      {showModal && (
        <Modal style={{width: '80%', backgroundColor: 'salmon'}}>
          <TouchableOpacity onPress={handleShowModal}>
            <Text style={{textAlign: 'right'}}>
              <Ionicons name="close-sharp" size={40} />
            </Text>
          </TouchableOpacity>
          <FlatList
            data={countries}
            renderItem={(item: {item: CountrieType}) => (
              <Countrie item={item.item} />
            )}
            keyExtractor={item => item.code}
          />
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: COLORS.primary,
    marginBottom: 10,
  },
  containerStyle: {
    height: 50,
    width: '100%',
    paddingHorizontal: 0,
  },
  flagButtonStyle: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: COLORS.inputBg,
  },
  textInputStyle: {
    height: 50,
    backgroundColor: COLORS.inputBg,
    paddingHorizontal: 0,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainerStyle: {
    backgroundColor: COLORS.inputBg,
    paddingHorizontal: 0,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default PhoneNumberInput;
