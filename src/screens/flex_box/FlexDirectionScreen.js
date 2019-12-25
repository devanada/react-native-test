import React from 'react';
import { StyleSheet, View } from 'react-native';

const FlexDirectionScreen = () => {
    return (
        <View style={styles.container}>
          <View style={styles.sub1} />
          <View style={styles.sub2} />
          <View style={styles.sub3} />
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    sub1: {
        width: 50, 
        height: 50, 
        backgroundColor: 'powderblue'
    },
    sub2: {
        width: 50, 
        height: 50, 
        backgroundColor: 'skyblue'
    },
    sub3: {
        width: 50, 
        height: 50, 
        backgroundColor: 'steelblue'
    }
})

export default FlexDirectionScreen