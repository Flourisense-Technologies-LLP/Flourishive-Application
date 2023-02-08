import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const Clients = () => {
  return (
    <ScrollView>
      <View style={{flex:1}}>
      <View style={{height: 60, justifyContent:'center'}}>
                <Text
                  style={styles.heading_text} numberOfLines={2}>
                    OUR CLIENTS
                </Text>
              </View>
      <FlatList
      data={CLIENTS_DATA}
      renderItem={ renderClientsCardView }
      keyExtractor={item=>item.id}
      numColumns={2}
      style={styles.container}
      contentContainerStyle={styles.list}
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
const styles = StyleSheet.create({
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
});

