import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friends #1', age: 20 },
        { name: 'Friends #2', age: 45 },
        { name: 'Friends #3', age: 32 },
        { name: 'Friends #4', age: 27 },
        { name: 'Friends #5', age: 53 },
        { name: 'Friends #6', age: 30 },
        { name: 'Friends #7', age: 22 },
        { name: 'Friends #8', age: 6 },
        { name: 'Friends #9', age: 10 },
        { name: 'Friends #10', age: 87 },
        { name: 'Friends #11', age: 666 },
        { name: 'Friends #12', age: 21 },
        { name: 'Friends #13', age: 56 },
        { name: 'Friends #14', age: 76 },
        { name: 'Friends #15', age: 99 },
    ];
    return(
        <FlatList 
            showsVerticalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>
                    {item.name} - age {item.age}</Text>;
            }} 
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;