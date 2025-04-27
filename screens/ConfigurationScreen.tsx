import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConfigurationScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Configuration Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ConfigurationScreen; 