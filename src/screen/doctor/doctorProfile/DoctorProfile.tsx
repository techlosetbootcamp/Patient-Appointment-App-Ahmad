import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../../components/header/Header';
import {COLORS} from '../../../constants/colors';
import {logout} from '../../../utils/logout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/Types';
import {StackNavigationProp} from '@react-navigation/stack';
const DoctorProfile = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.primary,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{marginTop: 20}}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymF4Am_crLSm_gi5M_VyYyHDvJ-nhdpaVnw&s',
            }}
            style={{width: 75, height: 75, borderRadius: 50}}
          />
          <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
            Dr. Name
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DoctorUnavailability')}
          style={{
            height: 62,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 16}}>Add Unavailability</Text>
          <AntDesign name="right" size={26} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => logout(navigation)}
          style={{
            height: 62,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: '#FF6161', fontSize: 16}}>Logout</Text>
          <AntDesign name="right" size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorProfile;
