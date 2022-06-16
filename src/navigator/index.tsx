import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@Views/home';
import Login from '@Views/login';

const StackNavigator: FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
