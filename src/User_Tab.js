import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const TabUserScreen = () => {
  return (
    <View style={styles.user}>
      <Text>This is User</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabUserScreen;
