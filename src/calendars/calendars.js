import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Agenda} from 'react-native-calendars';
import testIDs from './testID';
import monent from 'moment';
import Editor from './editor';
import { storeUserData } from '../store/store';

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      visible: false,
    };
  }

  render() {
    return (
      <>
        <Agenda
          testID={testIDs.agenda.CONTAINER}
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={monent(new Date()).utcOffset(8).format('l')}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          hideExtraDays={false}
          theme={{
            // selectedDotColor:"black",
            selectedDayBackgroundColor:"black",
            agendaDayTextColor: 'black',
            agendaDayNumColor: 'white',
            agendaTodayColor: 'black',
            agendaKnobColor: 'black'
          }}
        />
      </>
    );
  }

  loadItems(day) {
    for (let i = 0; i < 7; i++) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = this.timeToString(time);
      if (!this.state.items[strTime]) {
        this.state.items[strTime] = [];
        for (let j = 0; j < 1; j++) {
          this.state.items[strTime].push({
            name: strTime,
            hasItem: 0,
            title: '',
            content: '',
            type: '',
          });
        }
      }
    }
  }

  renderItem(item) {
    console.log(this.state.items)
    const collectData = data => {
      console.log(data);
      // data.name = item.name;
    };
    return (
      <>
        <View testID={testIDs.agenda.ITEM} style={styles.item}>
          <Text>{item.name}</Text>
        </View>
        <Editor collectData={collectData} />
      </>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

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
