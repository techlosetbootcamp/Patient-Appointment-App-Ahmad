import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {client} from './src/lib/client/Client';
import Navigation from './src/navigation/Navigation';
import {store} from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Navigation />
          <Toast />
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
