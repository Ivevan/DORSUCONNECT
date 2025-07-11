import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from '../screens/GetStarted';
import SignIn from '../screens/SignIn';
import CreateAccount from '../screens/CreateAccount';
import SchoolUpdates from '../screens/SchoolUpdates';
import AI_Chat from '../screens/AI_Chat';

const Stack = createNativeStackNavigator();

// Optimized animation config for better performance
const screenOptions = {
  headerShown: false,
  // Use simple fade animation for better performance
  animation: 'fade' as const,
  // Reduce animation duration
  animationDuration: 200,
  // Disable gesture navigation for smoother experience
  gestureEnabled: false,
  // Optimize presentation style
  presentation: 'card' as const,
  // Custom transition styling
  contentStyle: {
    backgroundColor: 'transparent',
  },
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="GetStarted"
        screenOptions={screenOptions}
      >
        <Stack.Screen 
          name="GetStarted" 
          component={GetStarted}
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignIn} 
        />
        <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccount}
        />
        <Stack.Screen 
          name="SchoolUpdates" 
          component={SchoolUpdates}
        />
        <Stack.Screen 
          name="Chat" 
          component={AI_Chat}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 