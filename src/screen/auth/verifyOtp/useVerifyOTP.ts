import {useRef, useState} from 'react';
import {TextInput} from 'react-native';

export const useVerifyOTP = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const inputRef1 = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const inputRef3 = useRef<TextInput>(null);
  const inputRef4 = useRef<TextInput>(null);
  return {
    input1,
    input2,
    input3,
    input4,
    setInput1,
    setInput2,
    setInput3,
    setInput4,
    inputRef1,
    inputRef2,
    inputRef3,
    inputRef4,
  };
};
