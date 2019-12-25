import React, { Component } from 'react';
import { Picker, View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
  state = {hand: 'right'}
   updateUser = (hand) => {
      this.setState({ hand: hand })
   }
  
  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.hand}
          onValueChange={hand => this.setState({ hand })}
          style={{ width: 160 }}
          mode="dropdown">
          <Picker.Item label="Right Hand" value="right" />
          <Picker.Item label="Left Hand" value="left" />
        </Picker>
        <Text style = {styles.text}>You're Selecting</Text>
        <Text style = {styles.text}>{this.state.hand}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
})