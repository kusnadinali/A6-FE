import React from 'react';
import {View} from 'react-native';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Feed from './pages/Feed';

const App = () => {
  return (
    <View>
      <Header />
      <Feed />
      <Navbar />
    </View>
  );
};

export default App;
