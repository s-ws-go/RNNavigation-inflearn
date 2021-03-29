import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const TabHomeScreen = ({navigation}) => {
  return (
    <View style={styles.home}>
      <Text>This is home</Text>
      <Button
        title="Go to the Home Stack Screen"
        onPress={() => {
          navigation.navigate('Home_Stack');
        }}></Button>
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
