import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const DrawerHomeScreen = ({navigation}) => {
  return (
    <View style={styles.home}>
      <Text>This is home</Text>
      <Button
        title="To User Screen"
        onPress={() => navigation.navigate('User')}
      />
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

export default DrawerHomeScreen;
