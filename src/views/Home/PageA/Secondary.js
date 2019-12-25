import React, { Component } from "react";
import { Button, View } from "react-native";

export default class Secondary extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <Button
          title="To Main"
          onPress={() => this.props.navigation.navigate("Main")}
        />
      </View>
    );
  }
}