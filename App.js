/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// 组件导入
import Caculator from './src/caculator/caculator';
import Register from './src/user/register';
import Calendars from './src/calendars/calendars';
import User from './src/user/user';
import Home from './src/guide/home';
import Editor from './src/calendars/editor';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User">
        <Stack.Screen name="Editor" component={Editor} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Caculator" component={Caculator} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Calendars" component={Calendars} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
