import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress={() => navigation.navigate('Basic')}
        title="Go to Basic Components Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('User')}
        title="Go to User Interface Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('View')}
        title="Go to List View Demo" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    flex: 0.3,
    justifyContent: 'space-between'
  }
});

export default HomeScreen;
