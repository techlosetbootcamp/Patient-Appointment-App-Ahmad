/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const AppWithApollo = () => (
  
    <App />
  
);

AppRegistry.registerComponent(appName, () => AppWithApollo);
