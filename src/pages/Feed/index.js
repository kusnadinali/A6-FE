import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Postingan from '../Postingan'

const Feed = () => {
    return (
        <View style={{backgroundColor:'#E3E1E1',height:541}}>
          <ScrollView> 
            <Postingan/>
            <Postingan/>
            <Postingan/>
            <Postingan/>
            <Postingan/>
          </ScrollView> 
        </View>
    )
}

export default Feed;

const styles = StyleSheet.create({})
