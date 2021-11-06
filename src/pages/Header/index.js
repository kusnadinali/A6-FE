import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import mail from '../../assets/icons/mail.png';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.textTitle}>Feed</Text>
      <Image source={mail} style={styles.mail} />
      {/* <Text>hai</Text> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    left: 0,
    top: 0,
    // borderRadius: 1,
    shadowColor: '#470000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    elevation: 1,
    backgroundColor: '#fff',
  },
  textTitle: {
    position: 'absolute',
    width: 35,
    height: 20,
    left: 30,
    top: 25,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    // lineHeight: 18,
    color: 'black',
  },
  mail: {
    position: 'absolute',
    width: 20,
    height: 20,
    left: 360,
    top: 25,
  },
});
