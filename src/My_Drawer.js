import 'react-native-gesture-handler';
import React from 'react';
import {ScrollView, StyleSheet, Button, Image, View, Text} from 'react-native';
import HomeLogo from '../assets/pics/home.png';
import {CommonActions} from '@react-navigation/native';

const SideDrawer = ({navigation}) => {
  //얘는 왜 컴포넌트 안에 함수정의를 해 준거지>?
  const navigateToScreen = route => () => {
    //route는 화면이동을 위한 것. arrow가 2개 있으니까 리턴값이 2개임. 중괄호 안에 구현할 내용이 스테이트를 업데이트 하는거고, 이 경우 arrow를 한번만 쓰면 무한루프에 걸림(redux)
    navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {},
      }),
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.imageContainer}>
            <Image source={HomeLogo} style={{width: 80, height: 80}}></Image>
          </View>
          <Text style={styles.sectionHeading}>Section 1</Text>
          <View style={styles.navSectionStyle}>
            <Text style={styles.sectionText} onPress={navigateToScreen('Home')}>
              Home
            </Text>
            <Text style={styles.sectionText} onPress={navigateToScreen('User')}>
              User
            </Text>
            <Text style={styles.sectionText} onPress={() => alert('Help Page')}>
              Help
            </Text>
            <Text style={styles.sectionText} onPress={() => alert('Info Page')}>
              Info
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{marginLeft: 30, marginBottom: 30}}>
        <Text>Copyright @ SLY, 2021.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 50,
  },
  sectionHeading: {
    backgroundColor: 'skyblue',
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  navSectionStyle: {
    backgroundColor: '#04b6ff',
    color: 'white',
  },
  sectionText: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: 'white',
  },
});

export default SideDrawer;
