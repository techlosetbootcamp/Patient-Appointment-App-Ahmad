import {useState} from 'react';
enum Role {
  DOCTOR = 'DOCTOR',
  PATIENT = 'PATIENT',
}
export const useSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState<number>(0);
  const [role, setRole] = useState<Role>(Role.PATIENT);

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
  };
};
