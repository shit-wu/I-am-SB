import React, {useState,useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Overlay, Card, Button} from 'react-native-elements';

const Editor = props => {
  const titleInput = useRef(null);
  const contentInput = useRef(null);
  const typeInput = useRef(null);

  let initData = {
    title: null,
    content: null,
    type: null,
    hasItem:null
  };

  const [data, setData] = useState(initData);
  const [visible, setVisible] = useState(false);
  const [show,setShow] = useState(true);

  const clearData = () => {
    titleInput.current.clear();
    contentInput.current.clear();
    typeInput.current.clear();
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const submitData = () => {
    let userData = data;
    console.log(userData);
    if (
      userData.title == null ||
      userData.content == null ||
      userData.type == null
    ) {
      console.log(userData);
      console.log(visible);
      toggleOverlay();
    } else {
      setShow({show:!show});
    }
  };

  if(show == true){
  return (
    <>
      <Card
        containerStyle={{
          backgroundColor: 'black',
          borderRadius: 10,
        }}>
        <Card.Title style={{color: 'white'}}>添加日程</Card.Title>
        <View style={styles.inputWrap}>
          <FontAwesome5
            style={styles.icon}
            name="heading"
            size={20}
            color="white"
          />
          <TextInput
            ref={titleInput}
            placeholder="标题"
            placeholderTextColor="#b3b3b3"
            style={[styles.titleInput, {fontSize: 18, paddingLeft: 10}]}
            // multiline={true}
            onChangeText={text => setData({...data, title: text})}
          />
        </View>
        <View style={styles.inputWrap}>
          <FontAwesome5
            style={[styles.icon, {marginTop: 20}]}
            name="poll-h"
            size={20}
            color="white"
          />
          <TextInput
            ref={contentInput}
            onChangeText={text => setData({...data, content: text})}
            placeholder="做点事啊,艹"
            placeholderTextColor="#b3b3b3"
            style={[
              styles.titleInput,
              {
                height: 100,
                textAlignVertical: 'top',
                paddingLeft: 10,
                paddingTop: 15,
              },
            ]}
            multiline={true}
          />
        </View>
        <View style={styles.inputWrap}>
          <FontAwesome5
            style={styles.icon}
            name="hand-middle-finger"
            size={20}
            color="white"
          />
          <TextInput
            ref={typeInput}
            placeholder="类型..."
            placeholderTextColor="#b3b3b3"
            style={[styles.titleInput, {fontSize: 16}, {paddingLeft: 10}]}
            onChangeText={text => setData({...data, type: text,hasItem:1})}
          />
        </View>
        <View style={[styles.inputWrap, {justifyContent: 'space-around'}]}>
          <Button
            onPress={clearData}
            buttonStyle={styles.button}
            icon={<FontAwesome5 name="undo" size={25} color="black" />}
          />
          <Button
            onPress={submitData}
            buttonStyle={styles.button}
            icon={<FontAwesome5 name="check" size={25} color="black" />}
          />
        </View>
      </Card>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        style={styles.overlay}>
        <Text>每个都要填啊，混蛋</Text>
      </Overlay>
    </>
  );}
  else{
    return(
      <>
        <Card
        containerStyle={{
          backgroundColor: 'black',
          borderRadius: 10,
        }}>
        <Card.Title style={{color: 'white'}}>日程</Card.Title>
        <View style={styles.inputWrap}>
          <FontAwesome5
            style={styles.icon}
            name="heading"
            size={20}
            color="white"
          />
          <Text
            style={[styles.titleInput, {fontSize: 25, paddingLeft: 10,width:'80%'}]}
          >{data.title}</Text>
        </View>
        <View style={styles.inputWrap}>
          <FontAwesome5
            style={[styles.icon, {marginTop: 20}]}
            name="poll-h"
            size={20}
            color="white"
          />
          <Text
            style={[
              styles.titleInput,
              { 
                width:'80%',
                paddingLeft: 10,
                fontSize:25
              },
            ]}
          >{data.content}</Text>
        </View>
        <View style={styles.inputWrap}>
          <FontAwesome5
            style={styles.icon}
            name="hand-middle-finger"
            size={20}
            color="white"
          />
          <Text
            style={[styles.titleInput,{width:'80%'}, {fontSize: 25}, {paddingLeft: 10}]}
          >{data.type}</Text>
        </View>
      </Card>
      </>
    )
  }
};

const styles = StyleSheet.create({
  titleInput: {
    width: '80%',
    height: 40,
    borderRadius: 5,
    fontSize: 18,
    color: 'black',
    backgroundColor: '#f2f2f2',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 0,
    marginBottom: 20,
  },
  inputWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginTop: 10,
  },
  button: {
    backgroundColor: 'white',
  },
  overlay: {
    padding: 50,
  },
});

export default Editor;
