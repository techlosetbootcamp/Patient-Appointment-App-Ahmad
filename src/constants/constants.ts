import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/Types';
import {StackNavigationProp} from '@react-navigation/stack';

 const navigation =
  useNavigation<StackNavigationProp<RootStackParamList>>();
