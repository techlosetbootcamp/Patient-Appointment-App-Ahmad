import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
const httpLink = new HttpLink({
  uri: 'https://doctor-appointment-backend-sever-production.up.railway.app/graphql',
});
const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem('authToken');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
