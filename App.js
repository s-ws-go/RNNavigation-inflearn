/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Image, Linking} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import UserScreen from './src/UserScreen';
import Homeicon from './src/Logo';
import HomeLogo from './assets/pics/home.png';

import DrawerHomeScreen from './src/Home_Drawer';
import DrawerUserScreen from './src/User_Drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="help"
        onPress={() => Linking.openURL('http://www.google.com')}
        icon={() => <Homeicon />}
      />
      <DrawerItem label="info" onPress={() => alert('INFO SCREEN')} />
    </DrawerContentScrollView>
  );
};

//App 안이 아니라 밖에서 선언해줘야 한다고 하는데 그 이유는?

const App = () => {
  // const Homeicon = () => {
  //   return (
  //     <Image
  //       style={{width: 50, height: 50}}
  //       source={require('./assets/pics/home.png')}></Image>
  //   );
  // };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="home"
        //front : 뒷 화면 고정, slide : 뒷 화면 밀어냄, permanent : 계속 남아있음(화면이 엄청 커서 남겨두고 싶은 경우)
        drawerType="front"
        drawerPosition="right"
        drawerStyle={{backgroundColor: 'red', width: 200}}
        //drawer에 있는 항목들을 스타일링 하기 위한 옵션. active~ 는 선택된 content에 대한 스타일링
        drawerContentOptions={{
          activeTintColor: 'yellow',
          activeBackgroundColor: 'skyblue',
        }}
        //drawercontent를 렌더링 하기 위한 함수 반환할 떄 사용(네비게이션 루트 등)
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={DrawerHomeScreen}
          options={{
            drawerIcon: () => (
              <Image style={{width: 50, height: 50}} source={HomeLogo}></Image>
            ),
          }}
        />
        <Drawer.Screen name="User" component={DrawerUserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         title: 'Home Screen!',
    //         headerTitle: Homeicon,
    //       }}
    //     />
    //     <Stack.Screen
    //       name="User"
    //       component={UserScreen}
    //       //initialParams 프롭스로 초기 파라미터 값 설정 가능함. 확인하기 위해 처음 route를 User로 변경
    //       initialParams={{
    //         Useridx: 50,
    //         UserName: 'Gildong',
    //         UserLastName: 'Go',
    //       }}
    //       options={{
    //         title: 'User Screen!',
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
