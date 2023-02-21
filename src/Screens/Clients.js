import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const Clients = () => {
  return (
    <ScrollView>
      <View style={styles.main}>
      <View style={styles.headerWrapper}>
          <Text style={styles.heading}>OUR CLIENTS</Text>
      </View>
      <FlatList
      data={CLIENTS_DATA}
      renderItem={ renderClientsCardView }
      keyExtractor={item=>item.id}
      numColumns={2}
      style={styles.container}
      contentContainerStyle={styles.list}
      />
    
    <View style={styles.headerWrapper}>
          <Text style={styles.heading}>OUR HAPPY CLIENTS</Text>
      </View>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      data={CLIENTS_REVIEW_DATA}
      renderItem={ renderClientsReviewView }
      keyExtractor={item=>item.id}
      />
      </View>
    </ScrollView>
  );
}
export default Clients
const CLIENTS_DATA = [
  {
    id: '1',
    image: require('../Asset/clients/client_swaraj_associate.png')
  },
  {
    id: '2',
    image: require('../Asset/clients/client_axio.png')
  },
  {
    id: '3',
    image: require('../Asset/clients/client_bits.png')
  },
  {
    id: '4',
    image: require('../Asset/clients/client_capital_bazar.jpeg')
  },
  {
    id: '5',
    image: require('../Asset/clients/client_fern_stays.png')
  },
  {
    id: '6',
    image: require('../Asset/clients/client_medi_enviro.png')
  },
  {
    id: '7',
    image: require('../Asset/clients/client_quick_connect.png')
  },
  {
    id: '8',
    image: require('../Asset/clients/client_regal_solutions.png')
  },
  {
    id: '9',
    image: require('../Asset/clients/client_astro_rishi.png')    
  },
];
const ClientsCardView = ({clientItem}) => (
        <View
          style={styles.card_layout}>
          <ImageBackground
            source={clientItem.image}
            resizeMode="contain"
            style={styles.image}>
          </ImageBackground>
        </View>
);
const renderClientsCardView = ({item}) => {
  return (
    <ClientsCardView
      clientItem={item}/>
  );
};
const CLIENTS_REVIEW_DATA = [
  {
    id: 1,
    client_name: 'John Doe CEO at Fern Stays',
    quote: 'Flourisense made my life easier as I no longer require a tech co-founder for my startup idea.',
    profile_img: require('../Asset/clients/client_astro_rishi.png'),
  },
  {
    id: 2,
    client_name: 'Margaret Curtis Director at Axio Prime',
    quote: 'Flourisense is probably the best B2B tech solution provider in the market.',
    profile_img: require('../Asset/clients/client_astro_rishi.png'),
  },
  {
    id: 3,
    client_name: 'Abhijeet CFO at REGAL',
    quote: 'The Best Web Development Team',
    profile_img: require('../Asset/clients/client_astro_rishi.png'),
  },
]
const ClientsReviewCardView = ({clientItem}) => (
  <View
    style={styles.review_card_layout}>
    
    <ImageBackground
      source={require("../Asset/clients/quote_card_background.png")}
      resizeMode='stretch'
      style={styles.review_background_image}>
      <View style={{flex: 1, flexDirection: 'row',}}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{height:25, alignItems: 'flex-start'}}>
          <Image resizeMode='stretch' style={{ height:20 , width:20}} source={require("../Asset/clients/quote.png")}/>
        </View>
        <View style={{flex: 1,alignItems: 'flex-start'}}>
          <Text style={styles.our_clients_card_quote_text} numberOfLines={5}>
            {clientItem.quote}
          </Text>
        </View>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={styles.our_clients_card_client_name_text} numberOfLines={2}>
            {clientItem.client_name}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection:'column', alignItems:'center', justifyContent:'center', width:120}}>
        <Image style={{ height:100, width:100 }} source={require("../Asset/clients/profile_photo.png")}/>
      </View>
      </View>
    </ImageBackground>
  </View>
);
const renderClientsReviewView = ({item}) => {
  return (
    <ClientsReviewCardView
      clientItem={item}/>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerWrapper: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  heading: {
    fontSize: 18,
    color: '#E9282B',
    fontFamily: 'Roboto-Bold',
  },
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'column',
  },
  list: {
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    height: 170,
    width: 180,
  },
  review_background_image: {
    flex: 1,
    justifyContent: 'center',
    padding:16
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  card_layout:{
    // height: 160,
    // width: 170,
    height: 170,
    width: 180,
    borderRadius: 10,
    justifyContent: 'flex-start',
    margin:3
  },
  review_card_layout:{
    height: 170,
    width: 360,
    borderRadius: 10,
    margin:16,
  },
  heading_text:{
    color: 'red',
    fontSize:24,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 15
  },
  card_heading_text:{
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10
  },
  card_content_text:{
    color: 'white', 
    fontSize: 12,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10},

    our_clients_card_quote_text: {
      color: '#ffffff',
      fontSize: 14,
    },
  
    our_clients_card_client_name_text: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
});

