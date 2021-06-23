import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Agenda} from 'react-native-calendars';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import testIDs from './testID';
import monent from 'moment';

import Editor from './editor';
import moment from 'moment';

const Rebuild = props => {
  const [items, setItems] = useState({});
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState({
    dateString: '',
    timestamp: '',
    year: '',
    month: '',
    day: '',
  });

  useEffect(async () => {
    let dateString = await monent(monent(new Date()).utcOffset(8)).format(
      'YYYY-M-DD',
    );
    let timestamp =
      (await monent(
        monent(new Date()).utcOffset(8).format('YYYY-MM-DD'),
      ).unix()) * 1000;
    let year = await monent(monent(new Date()).utcOffset(8)).format('YYYY');
    let month = await monent(monent(new Date()).utcOffset(8)).format('M');
    let day = await monent(monent(new Date()).utcOffset(8)).format('DD');
    let newDate = {
      dateString,
      timestamp,
      year,
      month,
      day,
    };
    setDate({...date, newDate});
    setTimeout(() => {
      console.log(date);
    }, 10000);
  }, []);

  //   const loadItemsForMonth = day => {
  //     for (let i = 1; i < 7; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       // 将时间戳转化为日期字符串
  //       const strTime = moment.unix(time);
  //       console.log(strTime);
  //       if (!items[strTime]) {
  //         let newItem = {
  //           name: strTime,
  //           hasItem: 0,
  //           title: '',
  //           content: '',
  //           type: '',
  //         };
  //         setItems({...items.strTime, newItem});
  //         // setItems(prevItems => {
  //         //   prevItems.strTime = {
  //         //     name: strTime,
  //         //     hasItem: 0,
  //         //     title: '',
  //         //     content: '',
  //         //     type: '',
  //         //   };
  //         // });
  //       }
  //     }
  //   };

  //   const renderItem = items => {
  //     const collectData = data => {
  //       data.name = item.name;
  //       data.hasItem = 1;
  //     };
  //     return (
  //       <>
  //         <View testID={testIDs.agenda.ITEM} style={styles.item}>
  //           <Text>{items.name}</Text>
  //         </View>
  //         <Editor collectData={collectData} />
  //       </>
  //     );
  //   };

  //   const renderEmptyDate = () => {
  //     return (
  //       <View style={styles.emptyDate}>
  //         <Text>This is empty date!</Text>
  //       </View>
  //     );
  //   };

  //   const rowHasChanged = (r1, r2) => {
  //     return r1.name !== r2.name;
  //   };

  //   const timeToString = time => {
  //     const date = new Date(time);
  //     return date.toISOString().split('T')[0];
  //   };

  return (
    <>
      <Text>{date.dateString}</Text>
      <Text>{date.timestamp}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 30,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  button: {
    width: 50,
    borderRadius: 50,
    backgroundColor: 'black',
  },
});

export default Rebuild;
