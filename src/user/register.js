import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Antd from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Input, Button, Overlay} from 'react-native-elements';

import {AsyncStorage, storeUserData, getUserData} from '../store/store';

const Register = ({navigation}) => {
  let Inituser = {
    username: '',
    password: '',
  };

  const [user, setUser] = useState(Inituser);
  const [visible, setVisible] = useState(false);

  // 遮罩层显示状态切换
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  // 注册事件处理
  const registed = async () => {
    let data = user;
    console.log('this is Data:');
    console.log(data);
    if (data.username.length != 0 && data.password.length != 0) {
      storeUserData(user);
      // getData();
      navigation.navigate('User');
    } else {
      toggleOverlay();
      console.log('Wrong input');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <FontAwesome5
          style={styles.logo}
          name="registered"
          size={100}
          color="black"
        />
        <Input
          maxLength={18}
          placeholder="INPUT YOUR USERNAME"
          label="Username"
          leftIcon={<Antd name="user" size={20} color="gray" />}
          onChangeText={text => {
            setUser({...user, username: text});
          }}
        />
        <Input
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
          <Text>Please Input Something!</Text>
        </Overlay>
        <View style={styles.buttonWrap}>
          <Button
            icon={<Antd name="adduser" size={30} color="white" />}
            buttonStyle={styles.button}
            onPress={registed}
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

export default Register;
