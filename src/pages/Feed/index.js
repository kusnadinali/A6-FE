import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import Postingan from '../Postingan'


const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Feed = () => {
  const [currentPage, setCurrentPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [dataPostingan,setDataPostingan] = useState([]);
  const [jumlahDB,setJumlahDB] = useState(0);
  const [refresh,setRefresh] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  let stopFetchMore = false;

  const getData = () => {
    setIsLoading(true);
    if(!stopFetchMore){
    axios.get(`http://10.0.2.2:8080/postingan/1/${currentPage}`)
    .then(res => {
        console.log('result :',res);
        
        setJumlahDB(Object.keys(res.data).length);
        
        setIsLoading(false);
        setDataPostingan(res.data.data);
        console.log('jumlah : ',dataPostingan.length);
        setRefreshing(false);
    });
    stopFetchMore = true;
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapperStyle}>
      <Postingan 
        profilImage={item.image_file} 
        username={item.name} 
        postImage={item.image_feed}
        postLike={item.total_likes}
        postComment={item.total_comment}
        postCaption={item.caption_feed} />
      </View>
    );
    
  };

  const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="small" color="#aaa" />
        </View> : null
    );
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 10);
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    stopFetchMore = false;
    wait(500).then(() => {
      setCurrentPage(10);
      getData();
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    getData();
  }, [currentPage]);

  return (
    <>
      
      <View style={styles.contentWrapper}>
          
        
          {dataPostingan === null ? (
            <Text style={styles.Err}>Feeds doesn't exists</Text>
          ) : (
            <FlatList

                data={dataPostingan}
                renderItem={renderItem}
                keyExtractor={item => item.image_feed}
                ListFooterComponent={renderLoader}
                onEndReached={loadMoreItem}
                onEndReachedThreshold={0.5}
                onScrollBeginDrag={() => {
                    stopFetchMore = false;
                }}
                refreshing = {refreshing}
                onRefresh={onRefresh}
          />
          )}
        
      </View>
    </>
  );
}

export default Feed;

const styles = StyleSheet.create({
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
    itemWrapperStyle: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    },
  contentWrapper:{
    height: '82%',
  },
  Err: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    marginTop: '50%',
  },
})
