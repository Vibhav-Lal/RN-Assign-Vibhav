import React from 'react';
import Home from './src/screens/home';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        TO DO
      </Text>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  }
});

export default App;
