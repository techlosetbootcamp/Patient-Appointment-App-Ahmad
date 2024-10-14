import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://doctor-appointment-backend-sever-production.up.railway.app/graphql',
  cache: new InMemoryCache(),
});
