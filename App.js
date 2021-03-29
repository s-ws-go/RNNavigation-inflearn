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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackHomeScreen from './src/HomeScreen';
import StackUserScreen from './src/UserScreen';
import Homeicon from './src/Logo';
import HomeLogo from './assets/pics/home.png';

import DrawerHomeScreen from './src/Home_Drawer';
import DrawerUserScreen from './src/User_Drawer';

import SideDrawer from './src/My_Drawer';

import TabHomeScreen from './src/Home_Tab';
import TabUserScreen from './src/User_Tab';
import TabMessageScreen from './src/Message_Tab';

import Icon from 'react-native-vector-icons/dist/Ionicons';
import {startClock} from 'react-native-reanimated';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

/* NESTING NAVIGATION 두 번째 기본 구조
  Stack Navigator
   - Drawer Navigator w/ Drawer Screen C, D.... => 첫 번째 스택스크린 안에서만 Drawer 작동. 다른 스택 스크린에서는 안돼.
     - Tab Navigator
      - Tab Screen E
      - Tab Screen F
   - Stack Screen B
   - Stack Screen C
*/
const DrawerComponent = () => {
  return (
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
      drawerContent={props => <SideDrawer {...props} />}>
      <Drawer.Screen name="Route" component={TabComponent} />
    </Drawer.Navigator>
  );
};

const TabComponent = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeBackgroundColor: 'skyblue',
        activeTintColor: 'blue',
        // inactiveTintColor: 'white',
        // style: {backgroundColor: 'yellow'},
      }}
      screenOptions={({route}) => ({
        // 이미지를 직접 삽입하면 뜨는데, 외부함수에서 끌고 오는 방식으로 쓰면 안 뜬다...?
        tabBarIcon: ({focused}) => {
          TabBarIcon(focused, route.name);
        },
      })}>
      <Tab.Screen name="Home" component={TabHomeScreen} />
      <Tab.Screen name="User" component={TabUserScreen} />
      <Tab.Screen name="Message" component={TabMessageScreen} />
    </Tab.Navigator>
  );
};

const TabBarIcon = (focused, name) => {
  let iconImagePath;
  let iconName;
  if (name === 'Home') {
    // iconName = 'home';
    iconImagePath = require('./src/assets/pics/home.png');
  } else if (name === 'User') {
    // iconName = 'people-outline';
    iconImagePath = require('./src/assets/pics/home.png');
  } else if (name === 'Message') {
    // iconName = 'mail-outline';
    iconImagePath = require('./src/assets/pics/home.png');
  }
  return (
    <Image
      source={HomeLogo}
      style={{width: focused ? 30 : 10, height: focused ? 30 : 10}}
    />
  );
};

// const CustomDrawerContent = props => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="help"
//         onPress={() => Linking.openURL('http://www.google.com')}
//         icon={() => <Homeicon />}
//       />
//       <DrawerItem label="info" onPress={() => alert('INFO SCREEN')} />
//     </DrawerContentScrollView>
//   );
// };

{
  /* <Ionicons name={iconName} size={iconSize} />; */
}

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
      <Stack.Navigator>
        <Stack.Screen name="main" component={DrawerComponent} />
        <Stack.Screen name="Home_Stack" component={StackHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Drawer.Navigator
    //     initialRouteName="home"
    //     //front : 뒷 화면 고정, slide : 뒷 화면 밀어냄, permanent : 계속 남아있음(화면이 엄청 커서 남겨두고 싶은 경우)
    //     drawerType="front"
    //     drawerPosition="right"
    //     drawerStyle={{backgroundColor: 'red', width: 200}}
    //     //drawer에 있는 항목들을 스타일링 하기 위한 옵션. active~ 는 선택된 content에 대한 스타일링
    //     drawerContentOptions={{
    //       activeTintColor: 'yellow',
    //       activeBackgroundColor: 'skyblue',
    //     }}
    //     //drawercontent를 렌더링 하기 위한 함수 반환할 떄 사용(네비게이션 루트 등)
    //     drawerContent={props => <SideDrawer {...props} />}>
    //     <Drawer.Screen
    //       name="Home"
    //       component={DrawerHomeScreen}
    //       options={{
    //         drawerIcon: () => (
    //           <Image style={{width: 50, height: 50}} source={HomeLogo}></Image>
    //         ),
    //       }}
    //     />
    //     <Drawer.Screen name="User" component={DrawerUserScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>

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
