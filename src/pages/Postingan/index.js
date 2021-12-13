import React from 'react';
// import axios from 'axios';
import {Image, StyleSheet, Text, View} from 'react-native';
// import profil from '../../assets/image/profil.jpg';
import dot from '../../assets/icons/dot.png';
import comment from '../../assets/icons/comment.png';
import like from '../../assets/icons/like.png';
import maximize from '../../assets/icons/maximize.png';
import ReadMore from '@fawazahmed/react-native-read-more';

const Postingan = ({
  profilImage,
  username,
  postImage,
  postLike,
  postComment,
  postCaption,
}) => {
  const caption = () => {
    return (
      <Text style={styles.caption}>
        <Text style={styles.usernameCaption}>{username}</Text> {postCaption}{' '}
      </Text>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.itemWrapper}>
        <View style={styles.headerPostingan}>
          <Image source={{uri: profilImage}} style={styles.profil} />
          <View>
            <Text style={styles.textUsername}>{username}</Text>
          </View>
          <Image source={dot} style={styles.icon} />
        </View>
        {/* //=======================gambar postingan================================ */}
        <View style={styles.imagePostingan}>
          <Image source={{uri: postImage}} style={styles.itemImagePostingan} />
        </View>
        {/* //==========================like & comment amount======================= */}
        <View style={styles.likeNComment}>
          <Image source={like} style={styles.like} />
          <Text style={styles.amount}>{postLike}</Text>
          <Image source={comment} style={styles.comment} />
          <Text style={styles.amount}>{postComment} </Text>
          <Image source={maximize} style={styles.maximize} />
        </View>
        {/* //========================== Caption ====================================== */}
        <View style={styles.body}>
          <View style={styles.captionBody}>
            {postCaption.length === 0 ? null : (
              <ReadMore numberOfLines={2}>{caption()}</ReadMore>
              // <Text style={styles.caption}>
              //   <Text style={styles.usernameCaption}>{username}</Text>{' '}
              //   {postCaption}{' '}
              // </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Postingan;

const styles = StyleSheet.create({
  itemWrapper: {
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  body: {
    alignItems: 'center',
    marginTop: 7,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  headerPostingan: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
    marginLeft: 11,
    marginBottom: 11,
  },
  profil: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    marginRight: 10,
  },
  textUsername: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    lineHeight: 15,
    display: 'flex',
    fontFamily: 'Roboto',
    width: 170,
  },
  icon: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 20,
  },
  itemImagePostingan: {
    width: '93%',
    height: 200,
    borderRadius: 15,
  },
  likeNComment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagePostingan: {
    alignItems: 'center',
    marginBottom: 10,
  },
  like: {
    width: 20,
    height: 20,
    marginLeft: 15,
  },
  amount: {
    marginHorizontal: 5,
    color: 'black',
  },
  comment: {
    width: 20,
    height: 20,
    marginLeft: 15,
  },
  captionBody: {
    flexDirection: 'row',
    width: '90%',
    // height: 40,
    paddingBottom: 10,
  },
  usernameCaption: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    fontFamily: 'Roboto',
  },
  caption: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: 'black',
  },
  maximize: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 15,
  },
});
