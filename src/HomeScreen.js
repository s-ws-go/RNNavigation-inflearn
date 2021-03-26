import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  const Option = navigation.setOptions;
  console.log(typeof Option);
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
            //버튼을 누르게 되면 '파라미터' 가 '패싱' 됨
          })
        }></Button>
      <Button
        title="Change Title!"
        onPress={() =>
          navigation.setOptions({
            title: 'Changed!!',
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'red',
            },
          })
        }
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

export default HomeScreen;
