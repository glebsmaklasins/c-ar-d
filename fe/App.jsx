import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import CameraPage from './components/CameraPage';
import Homepage from './components/Homepage';
import QrCodeGenerator from './components/QrCodeGenerator';

import MessagePage from './components/MessagePage';
import SendButton from './components/SendButton';
import PNGQR from './components/PNGQR';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Homepage} // Links to the custom created homepage (With Dog)
        options={{ title: 'Homepage' }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraPage} // Needs to link to the camera app the backend team made
        options={{ title: 'Camera Page' }}
      />

      <Stack.Screen
        name="MessagePage"
        component={MessagePage} // Links to the custom created homepage (With Dog)
        options={{ title: 'Message page' }}
      />

      <Stack.Screen
        name="QRcode"
        component={QrCodeGenerator} // Needs to
        options={{ title: 'QrCode' }}
      />

      <Stack.Screen
        name="PNGQR"
        component={PNGQR} // Links to the custom created homepage (With Dog)
        options={{ title: 'PNGQR' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
