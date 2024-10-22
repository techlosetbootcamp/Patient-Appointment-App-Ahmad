import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {COLORS} from '../../constants/colors';
import {modalProps} from '../../types/Types';

const Modal: React.FC<modalProps> = ({
  isOpen,
  setIsOpen,
  headerText,
  children,
}) => {
  return (
    <>
      {isOpen && (
        <View
          style={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',

            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 5,
            height: '100%',
            flex: 1,
            paddingHorizontal: 20,
          }}>
          <StatusBar backgroundColor={COLORS.primaryLowOpacity} />
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 16,
              width: '100%',
              minHeight: 150,
            }}>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 15,
              }}>
              <Text style={{fontSize: 16, fontWeight: 700, color: 'gray'}}>
                {headerText}
              </Text>
            </View>
            <View>{children}</View>
          </View>
        </View>
      )}
    </>
  );
};

export default Modal;
