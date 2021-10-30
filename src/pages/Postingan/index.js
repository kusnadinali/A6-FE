import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import profil from '../../assets/image/profil.jpg'
import dot from '../../assets/icons/dot.png'
import comment from '../../assets/icons/comment.png'
import like from '../../assets/icons/like.png'
import maximize from '../../assets/icons/maximize.png'

const Postingan = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.itemWrapper}>
               <View style={styles.headerPostingan} >
                   <Image source={profil} style={styles.profil} />
                   <View>
                       <Text style={styles.textUsername}>Nama ku</Text>
                   </View>
                   <Image source={dot} style={styles.icon} />
               </View>
               {/* //=======================gambar postingan================================ */}
               <View style={styles.imagePostingan}>
                   <Image source={{uri:'https://placeimg.com/640/480/any'}} style={styles.itemImagePostingan} />
               </View>
               {/* //==========================like & comment amount======================= */}
               <View style={styles.likeNComment}>
                    <Image source={like}  style={styles.like}/>
                    <Text style={styles.amount} >200</Text>
                    <Image source={comment}  style={styles.comment}/>
                    <Text style={styles.amount} >200</Text>
               </View>
               {/* //========================== Caption ====================================== */}
               <View style={{alignItems:'center',marginTop:7}}>
                    <View style={styles.captionBody}>
                        <Text style={styles.usernameCaption}>Nama ku</Text>
                        <Text style={styles.caption}> ini adalah caption</Text>
                    </View>
               </View>
               
            </View>
        </View>
    )
}

export default Postingan;

const styles = StyleSheet.create({
    itemWrapper:{
        width:314,
        height:310,
        borderRadius:20,
        // position:'absolute'
        backgroundColor:'white',
    },
    wrapper:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:15
    },
    headerPostingan:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:13,
        marginLeft:11,
        marginBottom:11
    },
    profil:{
        width:31,
        height:31,
        borderRadius:31/2,
        marginRight:11
    },
    textUsername:{
        fontSize:14,
        fontWeight:'bold',
        color:'black',
        lineHeight:15,
        display:'flex',
        fontFamily:'Roboto',
        width:170,
        marginRight:45
    },
    icon:{
        width:21,
        height:21,
    },
    itemImagePostingan:{
        width:295,
        height:180,
        borderRadius:15
    },
    likeNComment:{
        flexDirection:'row',
        alignItems:'center',
    },
    imagePostingan:{
        alignItems:'center',
        marginBottom:10
    },
    like:{
        width:19,
        height:19,
        marginLeft:12
    },
    amount:{
        marginHorizontal:5,
        color:'black'
    },
    comment:{
        width:19,
        height:19,
        marginLeft:12
    },
    captionBody:{
        flexDirection:'row',
        width:276,
        height:40,
        // backgroundColor:'red',
    },
    usernameCaption:{
        fontSize:14,
        fontWeight:'bold',
        color:'black',
        display:'flex',
        fontFamily:'Roboto',
    },
    caption:{
        fontSize:14,
        fontFamily:'Roboto',
        // lineHeight:15,
        // display:'flex',
        color:'black',
    }
})
