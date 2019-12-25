import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text>Slim Shady</Text>

    return <View style={styles.container}>
        <Text style={styles.textStyle}>Getting started with react native!</Text>
        <Text style={styles.subHeaderStyle}>My name is {greeting}</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    },
    container: {
        borderWidth: 2
    }
})

export default ComponentsScreen