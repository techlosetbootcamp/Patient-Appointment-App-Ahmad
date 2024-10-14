import {useState} from 'react';
import {Role} from '../../../types/Types';
import {useMutation} from '@apollo/client';
import {SIGN_UP} from '../../../graphql/mutations/signup';

export const useSignup = () => {
  const ROLE = ['DOCTOR', 'PATIENT'];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [errorstate, setErrorState] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('+92');
  const [signup, {data, loading, error}] = useMutation(SIGN_UP, {
    onCompleted(data, clientOptions) {
      console.log('User Sign up Succesfully', data);
      setErrorState('');
    },
    onError(error, clientOptions) {
      console.log('error', error);

      setErrorState(error.message);
    },
  });
  const submitHandler = () => {
    if (!name || !email || !password || !phoneNo || !role) {
      let missingFields = [];
      if (!name) {
        missingFields.push('Name');
      }
      if (!email) {
        missingFields.push('Email');
      }
      if (!password) {
        missingFields.push('Password');
      }
      if (!phoneNo) {
        missingFields.push('Phone no');
      }
      if (!role) {
        missingFields.push('Role');
      }
      setErrorState(
        `Please provide required fields: ${missingFields.join(', ')}`,
      );
      return;
    }
    const validatePhoneNumber = (phone: string) => {
      const phoneRegex = /^[0-9]{10,15}$/;
      return phoneRegex.test(phone);
    };
    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    if (!validatePhoneNumber(phoneNo)) {
      setErrorState(
        'Please enter a valid phone number (10-15 digits, numbers only).',
      );
      return;
    }
    if (!validateEmail(email)) {
      setErrorState('Please enter a valid Email.');
      return;
    }
    if (password.length < 8) {
      setErrorState('Password must be 8 charcters long');
      return;
    }
    const phoneNoWithCode = selectedCountryCode.concat(phoneNo);

    signup({
      variables: {
        name,
        email,
        password,
        role,
        phoneNo: phoneNoWithCode,
      },
    });
    setErrorState('');
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    phoneNo,
    setPhoneNo,
    role,
    setRole,
    submitHandler,
    ROLE,
    error,
    selectedCountryCode,
    setSelectedCountryCode,
    errorstate,
    loading,
  };
};
