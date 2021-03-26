import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const UserScreen = ({navigation, route: {params}}) => {
  const Useridx = params.Useridx;
  const UserName = params.UserName;
  const UserLastName = params.UserLastName;
  console.log(typeof Useridx);
  console.log(typeof UserName);
  console.log(typeof UserLastName);
  console.log(typeof JSON.stringify(Useridx));

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
