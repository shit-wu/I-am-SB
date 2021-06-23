import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import InputAear from './inputAear';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Antd from 'react-native-vector-icons/AntDesign';

const Caculator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <FontAwesome5
          name="react"
          size={80}
          color="white"
          style={{marginTop: 40}}
        />
        <FontAwesome5
          name="long-arrow-alt-right"
          size={50}
          color="white"
          style={{marginTop: 50}}
        />
        <Antd name="android1" size={80} color="white" style={{marginTop: 40}} />
      </View>
      <View>
        <InputAear />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebedf0',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 168,
    marginBottom: 30,
    fontSize: 34,
    backgroundColor: 'black',
  },
  result_wrap: {
    marginTop: 30,
    backgroundColor: '#FFFFFF',
  },
  result: {
    fontSize: 50,
    textAlign: 'right',
    paddingRight: 5,
  },
});

export default Caculator;
