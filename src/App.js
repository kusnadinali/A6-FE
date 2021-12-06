import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Feed from './pages/Feed';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Feed />
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    width: '100%',
    height: '100%',
  },
});

export default App;
