import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const UserScreen = ({ navigation }) => {  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Screen</Text>
      <Button 
        onPress={() => navigation.navigate('Picker')}
        title="Go to Picker Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Slider')}
        title="Go to Slider Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Switch')}
        title="Go to Switch Demo" 
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
