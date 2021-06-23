import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Button
          buttonStyle={styles.button}
          icon={
            <FontAwesome5
              style={styles.icon}
              name="calculator"
              size={25}
              color="white"
            />
          }
          title="Calculator"
          onPress={() => navigation.navigate('Caculator')}
        />
        <Button
          buttonStyle={styles.button}
          icon={
            <FontAwesome5
              style={styles.icon}
              name="calendar-alt"
              size={25}
              color="white"
            />
          }
          title="Calendars"
          onPress={() => navigation.navigate('Calendars')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    margin: 20,
    color: 'white',
    backgroundColor: 'black',
  },
  icon: {
    marginRight: 10,
  },
});

export default Home;
