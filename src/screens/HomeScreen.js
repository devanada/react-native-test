import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress={() => navigation.navigate('Box')}
        title="Go to Box Object Model Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('FlexBox')}
        title="Go to Flex Box Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Position')}
        title="Go to Position Demo" 
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
