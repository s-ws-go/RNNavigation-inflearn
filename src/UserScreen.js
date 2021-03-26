import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const UserScreen = ({navigation, route: {params}}) => {
  const Useridx = params ? params.Useridx : null;
  const UserName = params ? params.UserName : null;
  const UserLastName = params ? params.UserLastName : null;
  console.log(typeof Useridx);
  console.log(typeof UserName);
  console.log(typeof UserLastName);
  console.log(typeof JSON.stringify(Useridx));

  const TitlebarColor = () =>
    navigation.setOptions({
      title: 'UserScreen By Fn !!!',
      headerStyle: {
        backgroundColor: 'yellow',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'red',
      },
      // IOS 환경에서는 User창에서 'Home으로 돌아가기 버튼에도 집 모양 아이콘이 들어가 있어서 이걸 문자열로 바꾸고 싶을 때 명령어로 headerBackTitle 사용
      headerBackTitle: 'BACK',
      headerRight: () => (
        <Button
          title="Go Home"
          color="brown"
          onPress={() => navigation.navigate('Home')}
        />
      ),
    });

  TitlebarColor();

  return (
    <View style={styles.home}>
      <Text>This is User</Text>
      <Button
        title="To Home Screen"
        onPress={() => navigation.navigate('Home')}></Button>
      <Text>User index : {Useridx}</Text>
      <Text>User Name : {UserName}</Text>
      <Text>User Last Name : {UserLastName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserScreen;
