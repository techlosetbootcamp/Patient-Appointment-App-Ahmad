import {useState} from 'react';

export const useForgotPassword = () => {
  const [email, setEmail] = useState('');
  return {email, setEmail};
};
