import React, {useState,useEffect} from "react";
import {View,Text ,ScrollView} from 'react-native';
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Feed from "./pages/Feed";


const App = ()=> {
  return (
    <View>
      <Header/>
      <Feed/>
      <View>
        <Navbar/>
      </View>
    </View>
  );
};







export default App;