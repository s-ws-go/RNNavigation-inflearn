import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import HomeLogo from '../assets/pics/home.png';

const Homeicon = () => {
  return <Image style={{width: 50, height: 50}} source={HomeLogo}></Image>;
};

export default Homeicon;
