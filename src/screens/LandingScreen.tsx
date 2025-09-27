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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default LandingScreen;
