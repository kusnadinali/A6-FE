import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import feeds from '../../assets/icons/feeds.png';
import diamond from '../../assets/icons/diamond.png';
import button_tengah from '../../assets/icons/button_tengah.png';
import search from '../../assets/icons/search.png';
import user from '../../assets/icons/user.png';

const Navbar = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.kotak}>
        <Image source={feeds} style={styles.icon} />
        <Text style={styles.teksFeed}>Feed</Text>
      </View>
      <View style={styles.kotak}>
        <Image source={search} style={styles.icon} />
        <Text style={styles.teks}>Search</Text>
      </View>
      <View style={styles.kotak}>
        <Image source={button_tengah} style={styles.midButton} />
      </View>
      <View style={styles.kotak}>
        <Image source={diamond} style={styles.icon} />
        <Text style={styles.teks}>Safety</Text>
      </View>
      <View style={styles.kotak}>
        <Image source={user} style={styles.icon} />
        <Text style={styles.teks}>Profile</Text>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  wrapper: {
    height: 75,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    alignSelf: 'center',
    top: 18,
  },
  teks: {
    alignSelf: 'center',
    top: 18,
  },
  teksFeed: {
    color: '#0C8EFF',
    alignSelf: 'center',
    top: 18,
  },
  midButton: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    top: 5,
  },
  kotak: {
    width: '20%',
    height: '100%',
  },
});
