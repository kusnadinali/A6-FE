import React from 'react'
import { Image,StyleSheet, Text, View } from 'react-native'
import bodynavbar from '../../assets/icons/body_navbar.png'
import feeds from '../../assets/icons/feeds.png'
import diamond from '../../assets/icons/diamond.png'
import button_tengah from '../../assets/icons/button_tengah.png'
import search from '../../assets/icons/search.png'
import user from '../../assets/icons/user.png'

const Navbar = () => {
    return (
        <View style={styles.wrapper}>
            
            <Image source={bodynavbar} style={styles.body} />
            
            <Image source={feeds} style={styles.feeds}/>
            <Image source={search} style={styles.search}/>
            <Image source={button_tengah} style={styles.midButton}/>
            <Image source={diamond} style={styles.diamond}/>
            <Image source={user} style={styles.user}/>
            <Text style={styles.textFeed}>Feed</Text>
            <Text style={styles.textSearch}>Search</Text>
            <Text style={styles.textSafety}>Safety</Text>
            <Text style={styles.textProfile}>Profile</Text>

        </View>
    )
}

export default Navbar;

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: '#E3E1E1'
    },
    body: {
        width: 360,
        height: 60.56,
    },
    feeds:{
        position: 'absolute',
        width: 20,
        height: 20,
        left: 25.23,
        top: 19.35,
    },
    search:{
        position: 'absolute',
        width: 20,
        height: 20,
        left: 94.73,
        top: 17.66,
    },
    midButton:{
        position: 'absolute',
        width: 49.63,
        height: 49.63,
        left: 151.93,
        top: 5.89,
    },
    diamond:{
        position: 'absolute',
        width: 19.35,
        height: 19.35,
        left: 233.51,
        top: 16.82,
    },
    user:{
        position: 'absolute',
        width: 27.76,
        height: 26.92,
        left: 300.8,
        top: 15.98,
    },
    textFeed:{
        position: 'absolute',
        width: 34.49,
        height: 15,
        fontFamily:'Roboto',
        left:20,
        top:40,
        fontStyle:'normal',
        fontWeight:'normal',
        color:'#0C8EFF'
    },
    textSearch:{
        position: 'absolute',
        fontFamily:'Roboto',
        left:87.2,
        top:40,
        fontStyle:'normal',
        fontWeight:'normal',
        color:'#9E9E9E'
    },
    textSafety:{
        position: 'absolute',
        fontFamily:'Roboto',
        left:225,
        top:40,
        fontStyle:'normal',
        fontWeight:'normal',
        color:'#9E9E9E'
    },
    textProfile:{
        position: 'absolute',
        fontFamily:'Roboto',
        left:297,
        top:40,
        fontStyle:'normal',
        fontWeight:'normal',
        color:'#9E9E9E'
    }
})
