import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {PatientsFilterModalProps} from '../../types/Types';

const PatientsFilterModal: React.FC<PatientsFilterModalProps> = ({
  children,
  setVisible,
  visible,
}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0)'}}>
        <View
          style={{
            height: '65%',
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
          }}>
          {/* Close Button */}
          {/* <TouchableOpacity
            onPress={() => setVisible(false)}
            style={{
              alignSelf: 'flex-end',
              padding: 10,
              backgroundColor: '#ddd',
              borderRadius: 5,
            }}>
            <Text>Close</Text>
          </TouchableOpacity> */}

          {/* Modal Content */}

          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 10,
              alignSelf: 'center',
            }}>
            Filter
          </Text>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={{position: 'absolute', top: 20, right: 20}}>
            <AntDesign name="close" size={22} />
          </TouchableOpacity>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default PatientsFilterModal;
