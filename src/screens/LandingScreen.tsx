import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LandingScreen: React.FC = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} testID="hello-text">
        Hello, World!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#333333',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default LandingScreen;
