/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

// import BckImg from './images/bg.jpg' 
// import Logo from './images/logo.png'
import Login from './screens/Login';
import Signup from './screens/Signup';
import Navigation from './screens/routes';






const App = () => {
  return (
    <>
    <Navigation/>
    
    </>
  );
};


export default App;
