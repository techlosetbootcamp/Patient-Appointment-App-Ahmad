import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {DropDownTypes} from '../../types/Types';
import {COLORS} from '../../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native-gesture-handler';
const DropDown: React.FC<DropDownTypes> = ({
  isWidthFull,
  isWidthHalf,
  labelSecondryColor,
  data,
  selectedValue,
  setSelectedValue,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  //   const [selectedValue, setSelectedValue] = useState('');
  const handleToogleDropDown = () => {
    setIsClicked(!isClicked);
  };

  const DropDownRenderItems = ({item}: {item: string}) => (
    <TouchableOpacity
      style={{
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
      }}
      onPress={() => handleSelect(item)}>
      <Text style={{textAlign: 'center'}}>{item}</Text>
    </TouchableOpacity>
  );
  const handleSelect = (item: string) => {
    setSelectedValue(item);
    setIsClicked(false);
  };
  return (
    <View style={[{marginTop: 8}, isWidthHalf && {width: '48%'}]}>
      <Text
        style={[
          {color: COLORS.primary, marginBottom: 10},
          labelSecondryColor && {color: COLORS.secondry},
        ]}>
        {/* {label} */}
        Role
      </Text>
      <TouchableOpacity
        style={{
          height: 47,
          backgroundColor: COLORS.inputBg,
          borderRadius: 10,
          width: '100%',
          paddingHorizontal: 10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
        onPress={handleToogleDropDown}>
        <Text
          style={{
            textAlignVertical: 'center',
          }}>
          {selectedValue ? selectedValue : 'Select'}
        </Text>

        {isClicked ? (
          <AntDesign name="caretup" />
        ) : (
          <AntDesign name="caretdown" />
        )}
      </TouchableOpacity>
      {isClicked && (
        <View
          style={{
            position: 'absolute',
            top: 85,
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            minHeight: 50,
            zIndex: 1,
          }}>
          <Text style={{textAlign: 'center'}}>
            {/* <FlatList
              data={data}
              renderItem={({item}) => <DropDownRenderItems item={item} />}
              keyExtractor={item => item}
              nestedScrollEnabled={true}
            /> */}
            {data.map(item => (
              <TouchableOpacity
                key={item}
                style={{
                  paddingVertical: 7,
                  paddingHorizontal: 15,
                  borderBottomColor: 'black',
                  borderBottomWidth: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: 10,
                }}
                onPress={() => handleSelect(item)}>
                <Text style={{textAlign: 'center'}}>{item}</Text>
              </TouchableOpacity>
            ))}
          </Text>
        </View>
      )}
    </View>
  );
};

export default DropDown;
