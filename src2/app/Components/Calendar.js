import React, { Component } from 'react';
//import react in our code. 
import { View, StyleSheet, Text } from 'react-native';
//import all the components we are going to use.
import { CalendarList } from 'react-native-calendars';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    return (
      <View style={styles.container}>
        <Icon style={styles.back}
          name="md-arrow-round-back"
          size={25}
          type='evilicon'
          color='black'
          onPress={() => this.props.navigation.goBack()}
        />
        <CalendarPicker
          months={['1/', '2/', '3/', '4/', '5/', '6/', '7/', '8/', '9/', '10/', '11/', '12/']}
          weekdays={['7 дахь', '1 дахь', '2 дахь', '3 дахь', '4 дахь', '5 дахь', '6 дахь']}
          onDateChange={this.onDateChange}
          previousTitle="Хойшоо"
          nextTitle="Урагшаа"
        />
        <Text>SELECTED DATE:{startDate}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
  },
  date: {
    backgroundColor: 'gray',
    marginTop: 50,
  },
  back: {
    marginTop: 20,
    marginLeft: 20,
  },
})