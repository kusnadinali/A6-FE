import React,{} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import mail from '../../assets/icons/mail.png';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.textTitle}>Feed</Text>
            <Image source={mail} style={styles.mail} />
            <Text>hai</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header:{
        height: 38,
        width: 360,
        left: 0,
        top: 0,
        borderRadius: 1,
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        elevation: 1
    },
    textTitle:{
        position: 'absolute',
        width: 33,
        height: 18,
        left: 29,
        top: 10,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 18,
        color: 'black'
    },
    mail:{
        position: 'absolute',
        width: 21,
        height: 21,
        left: 315,
        top: 10,
    }
})
