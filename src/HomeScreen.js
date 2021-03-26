import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.home}>
      <Text>This is home</Text>
      <Button
        title="To User Screen"
        onPress={() =>
          navigation.navigate('User', {
            Useridx: 100,
            UserName: 'Wansoo',
            UserLastName: 'Shin',
          })
        }></Button>
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

export default HomeScreen;
