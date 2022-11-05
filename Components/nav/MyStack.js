import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../Screens/Login';
import Signup from '../../Screens/Signup';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
export default MyStack