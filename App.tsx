/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {FlatList, Text, View, ActivityIndicator} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
const client = new ApolloClient({
  uri: 'http://192.168.100.26:8000/graphql',
  cache: new InMemoryCache(),
});
type SectionProps = PropsWithChildren<{
  title: string;
}>;

// const GET_TODOS_WITH_USER = gql`
//   query getTodoWithUser {
//     getTodos {
//       id
//       title
//       completed
//       user {
//         id
//         name
//       }
//     }
//   }
// `;

function App(): React.JSX.Element {
  // const {data, loading, error} = useQuery(GET_TODOS_WITH_USER);

  // if (loading) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size="large" color="#00ff00" />
  //       <Text>hi</Text>
  //     </View>
  //   );
  // }

  // if (error) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <Text style={{color: 'red'}}>Error: {error.message}</Text>
  //     </View>
  //   );
  // }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
