import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';
import {AuthPageProps, RootStackParamList} from '../../types/Types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../input/Input';
import {NavigationProp, useNavigation} from '@react-navigation/native';
const AuthPage: React.FC<AuthPageProps> = ({
  title,
  anotherPage,
  description,
  goBack,
  children,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={{flex: 1, paddingHorizontal: '4%', backgroundColor: 'white'}}>
      <StatusBar backgroundColor={COLORS.primary} animated />
      <View
        style={{
          height: '8%',
          display: 'flex',
          justifyContent: 'center',
        }}>
        {goBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-outline"
              size={25}
              color={COLORS.grayDark}
            />
          </TouchableOpacity>
        )}
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: '700',
          color: 'black',
          marginTop: 15,
        }}>
        {title}
      </Text>
      {children}
    </View>
  );
};
export default AuthPage;
