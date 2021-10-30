import React, {useState,useEffect} from "react";
import {View,Text ,ScrollView} from 'react-native';
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";


const App = ()=> {
  return (
    <View>
      <Header/>
        <View style={{backgroundColor:'grey',height:541}}>
          <ScrollView> 
          
          </ScrollView> 
        </View> 

        <View>
          <Navbar/>
        </View>
    </View>
  );
};







export default App;