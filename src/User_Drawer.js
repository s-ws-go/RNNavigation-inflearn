import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const DrawerUserScreen = ({navigation}) => {
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
