import {useEffect, useState} from 'react';
import {decodeJwtToken} from './decodeJwtToken';

export const useCurrentUserInfo = () => {
  const [role, setRole] = useState<string | undefined>('');
  const [email, setEmail] = useState<string | undefined>('');
  useEffect(() => {
    const fetchRole = async () => {
      const token = await decodeJwtToken();
      setRole(token?.decode.role);
      setEmail(token?.decode.email);
    };
    fetchRole();
  }, []);

  return {role, email};
};
