import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const TabMessageScreen = () => {
  return (
    <View style={styles.message}>
      <Text>This is message</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabMessageScreen;
