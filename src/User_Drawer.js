import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import HomeLogo from '../assets/pics/home.png';

const DrawerUserScreen = ({navigation}) => {
  const drawerIcons = () =>
    navigation.setOptions({
      drawerIcon: () => (
        <Image style={{width: 50, height: 50}} source={HomeLogo}></Image>
      ),
    });
  drawerIcons();
  return (
    <View style={styles.home}>
      <Text>This is User</Text>
      <Button
        title="To Home Screen"
        onPress={() => navigation.navigate('Home')}></Button>
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

export default DrawerUserScreen;
