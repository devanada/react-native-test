import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const UserScreen = ({ navigation }) => {  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Flex Box Screen</Text>
      <Button 
        onPress={() => navigation.navigate('Align')}
        title="Go to Align Item Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('FlexDirection')}
        title="Go to Flex Direction Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Justify')}
        title="Go to Justify Content Demo" 
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

export default UserScreen;
