import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const BasicScreen = ({ navigation }) => {  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basic Components</Text>
      <Button 
        onPress={() => navigation.navigate('Component')}
        title="Go to Components Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Demo" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    flex: 0.5,
    justifyContent: 'space-between'
  }
});

export default BasicScreen;
