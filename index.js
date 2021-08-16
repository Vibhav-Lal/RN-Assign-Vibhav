/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import AppPC from './AppPC';
import News from './srcnews/News';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import Insta from './srcinsta/Insta';

AppRegistry.registerComponent(appName, () => App);
