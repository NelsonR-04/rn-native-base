import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@Views/home';
import Login from '@Views/login';

const StackNavigator: FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerMode: 'float',
        title: 'home',
      }}>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
