import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>List View</Text>
      <Button 
        onPress={() => navigation.navigate('Flat')}
        title="Go to Flat List Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Section')}
        title="Go to Section List Demo" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    flex: 0.2,
    justifyContent: 'space-between'
  }
});

export default HomeScreen;
