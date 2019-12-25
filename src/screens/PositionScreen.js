import React from 'react';
import { StyleSheet, View } from 'react-native';

const PositionScreen = () => {
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
        borderWidth: 3,
        marginTop: 2,
        marginBottom: 2,
        paddingTop: 10,
        paddingBottom: 10
    },
    sub1: {
        height: 50,
        backgroundColor: 'powderblue'
    },
    sub2: {
        height: 50,
        backgroundColor: 'red',
        top: 20,
        left: 20
    },
    sub3: {
        height: 100,
        backgroundColor: 'steelblue'
    }
})

export default PositionScreen