import React, {useState,useEffect} from "react";
import {View,Text ,ScrollView} from 'react-native';
import Header from "./pages/Header";


const App = ()=> {
  return (
    <View>
      <Header/>
        <View style={{height:541}}>
          
          <ScrollView> 
          
          </ScrollView> 
        </View> 

        <View style={{backgroundColor:'red',height:150}}>
          
        </View>
    </View>
  );
};







export default App;