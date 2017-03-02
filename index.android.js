// this is our entry point for Android. App is our 'root'
// component that we export to AppRegistry. Essentially
// we feed all our data and logic through App

import {
  AppRegistry
} from 'react-native';
import App from './app';

AppRegistry.registerComponent('AwesomeTodo', () => App);
