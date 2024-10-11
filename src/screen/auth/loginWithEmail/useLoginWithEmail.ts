import {useState} from 'react';
enum Role {
  DOCTOR = 'DOCTOR',
  PATIENT = 'PATIENT',
}
export const useLoginWithEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return {
    email,
    setEmail,
    password,
    setPassword,
  };
};
