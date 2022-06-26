import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@Views/home';
import Login from '@Views/login';

const StackNavigator: FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'float',
      }}>
      <Stack.Group>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
