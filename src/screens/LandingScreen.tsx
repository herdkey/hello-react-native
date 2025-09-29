import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import scamwiseImage from '@assets/scamwise.png';
import { colors } from '@src/theme';

const LandingScreen: React.FC = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} testID="hello-text">
        Hello, Savi!
      </Text>
      <Image source={scamwiseImage} resizeMode="contain" style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
  text: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default LandingScreen;
