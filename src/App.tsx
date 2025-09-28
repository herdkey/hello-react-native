/**
 * Hello Mobile App
 * @format
 */

import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BootSplash from 'react-native-bootsplash';

import LandingScreen from '@src/screens/LandingScreen';

const App: React.FC = (): React.ReactElement => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const init = async (): Promise<void> => {
      // You can add any initialization logic here
      // For example, loading fonts, checking authentication, etc.

      // Simulate some loading time
      await new Promise(resolve => setTimeout(() => resolve(undefined), 1000));

      // Hide the splash screen
      await BootSplash.hide({ fade: true });
    };

    init();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <LandingScreen />
    </SafeAreaProvider>
  );
};

export default App;
