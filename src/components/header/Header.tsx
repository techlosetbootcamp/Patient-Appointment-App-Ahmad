import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';
import {headerProps, RootStackParamList} from '../../types/Types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Header: React.FC<headerProps> = ({children, goBack, headerText}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 20,
        zIndex: 1,
      }}>
      <StatusBar backgroundColor={COLORS.primary} />
      {goBack && (
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
              {headerText}
            </Text>
          </View>
        </View>
      )}
      {children}
    </View>
  );
};

export default Header;
