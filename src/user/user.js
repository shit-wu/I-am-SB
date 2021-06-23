import React, {useState,useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Antd from 'react-native-vector-icons/AntDesign';
import {Input, Button, Overlay} from 'react-native-elements';

import {AsyncStorage, getUserData} from '../store/store';
import {createIconSetFromFontello} from 'react-native-vector-icons';

const User = ({navigation}) => {
  let Inituser = {
    username: '',
    password: '',
  };

  const userRef = useRef();
  const passRef = useRef();

  const [user, setUser] = useState(Inituser);
  const [visible, setVisible] = useState(false);

  const clearData = () => {
    userRef.current.clear();
    passRef.current.clear();
  }

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const login = async () => {
    let inputData = user;
    let userData = await getUserData('user');
    if (
      userData != null &&
      inputData.username == userData.username &&
      inputData.password == userData.password
    ) {
      navigation.navigate('Home');
      clearData();
    } else {
      // 错误处理
      toggleOverlay();
      clearData();
      console.log('wrong username and password!!!');
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../img/logo.jpg')} />
        <Input
          ref={userRef}
          maxLength={18}
          placeholder="INPUT YOUR USERNAME"
          label="Username"
          leftIcon={<Antd name="user" size={20} color="gray" />}
          onChangeText={text => setUser({...user, username: text})}
        />
        <Input
          ref={passRef}
          maxLength={18}
          label="Password"
          secureTextEntry={true}
          placeholder="INPUT YOUR PASSWORD"
          leftIcon={<Antd name="lock1" size={20} color="gray" />}
          onChangeText={text => {
            setUser({...user, password: text});
          }}
        />
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <Text>Please Input Your Account!</Text>
        </Overlay>
        <View style={styles.buttonWrap}>
          <Button
            icon={<Antd name="adduser" size={30} color="white" />}
            buttonStyle={styles.button}
            onPress={() => navigation.navigate('Register')}
          />
          <Button
            icon={<Antd name="login" size={30} color="white" />}
            buttonStyle={styles.button}
            onPress={login}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  username: {
    height: 60,
    textAlign: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    backgroundColor: '#FFFFFF',
  },
  password: {
    height: 60,
    width: '100%',
    marginBottom: 50,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 50,
  },
});

export default User;
