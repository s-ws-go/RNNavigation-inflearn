import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const TabHomeScreen = () => {
  return (
    <View style={styles.home}>
      <Text>This is home</Text>
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

export default TabHomeScreen;
