import {useEffect, useState} from 'react';
import {decodeJwtToken} from '../../utils/decodeJwtToken';

export const useHome = () => {
  const [role, setRole] = useState<string | undefined>('');
  const [email, setEmail] = useState<string | undefined>('');
  useEffect(() => {
    const fetchTokenData = async () => {
      const decodedData = await decodeJwtToken();
      setEmail(decodedData?.decode?.email);
      setRole(decodedData?.decode?.role);
      console.log(role, email);
    };
    fetchTokenData();
  }, []);

  return {email, role};
};
