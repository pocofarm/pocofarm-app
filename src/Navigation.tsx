import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamsList } from './types/rootStackParamList';
import { HomeScreen } from './screens';

const DEFAULT_SCREEN_OPTIONS = { headerShown: false };

const RootStack = createStackNavigator<RootStackParamsList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={DEFAULT_SCREEN_OPTIONS}>
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
