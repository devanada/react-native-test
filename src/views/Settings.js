import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import CustomHeader from "../components/CustomHeader";

export default class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader navigation={this.props.navigation} />
        <Text style={styles.Text}>Setting Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 35,
    textAlign: 'center'
  }
});