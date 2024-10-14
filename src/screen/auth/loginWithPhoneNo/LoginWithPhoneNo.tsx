import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AuthPage from '../../../components/authPage/AuthPage';
import Button from '../../../components/button/Button';
import PhoneNumberInput from '../../../components/phoneNumberInput/PhoneNumberInput';
import {COLORS} from '../../../constants/colors';
import {RootStackParamList} from '../../../types/Types';

export default function LoginWithPhoneNo() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('+92');
  const onSubmit = () => {
    console.log('PhoneNo', `${selectedCountryCode}${phoneNumber}`);
  };
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={{flex: 1}}>
      <AuthPage title="Login" goBack>
        <PhoneNumberInput
          label="Phone Number"
          value={phoneNumber}
          onChange={setPhoneNumber}
          selectedCountryCode={selectedCountryCode}
          setSelectedCountryCode={setSelectedCountryCode}
        />
        <View style={{marginTop: 25}}>
          <Button
            title="Send OTP"
            onPress={() => {
              // navigation.navigate('verifyOTP'),

              onSubmit();
            }}
          />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: COLORS.primary}}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </AuthPage>
    </View>
  );
}
