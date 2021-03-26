import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const HomeScreen = ({navigation}) => {
  navigation.setOptions({
    title: 'This is Home', // 아이콘에 가려져서 적용
    headerStyle: {
      backgroundColor: 'yellow',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'red',
    },
    headerRight: () => (
      <Button title="info" color="brown" onPress={() => alert('Info')} />
    ),
  });

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
