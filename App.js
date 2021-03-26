/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import UserScreen from './src/UserScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home Screen!'}}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          //initialParams 프롭스로 초기 파라미터 값 설정 가능함. 확인하기 위해 처음 route를 User로 변경
          initialParams={{
            Useridx: 50,
            UserName: 'Gildong',
            UserLastName: 'Go',
          }}
          options={{
            title: 'User Screen!',
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'red',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
