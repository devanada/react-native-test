import React from 'react';
import { StyleSheet, View } from 'react-native';

const AlignItemScreen = () => {
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    sub1: {
        width: 50,
        height: 50,
        backgroundColor: 'powderblue',
        alignSelf: 'flex-end'
    },
    sub2: {
        height: 50,
        backgroundColor: 'skyblue'
    },
    sub3: {
        height: 100,
        width: 50,
        backgroundColor: 'steelblue',
        alignSelf: 'flex-start'
    }
})

export default AlignItemScreen