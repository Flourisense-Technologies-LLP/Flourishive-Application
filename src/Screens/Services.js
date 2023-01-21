import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const image = require('../Asset/services/service_card_background.png');

const SERVICES_DATA = [
  {
    id: '1',
    heading: 'Web Designing',
    content: 'When it comes to promote your business online presence, there is no better starting point than a professional, neat web design.'
  },
  {
    id: '2',
    heading: 'Social Media Marketing',
    content: 'Social media community management & marketing. Marketers need to build digital relationships and reputation before closing a sale'
  },
  {
    id: '3',
    heading: 'Search Engine Optimization',
    content: 'The future of SEO is here – understanding and marketing to specific and defined audiences through search engines.'
  },
  {
    id: '4',
    heading: 'Social Media Campaigning',
    content: 'Improving overall brand engagement.Marketing is to know and understand the customer so well the product or service fits him and sells itself'
  },
  {
    id: '5',
    heading: 'Graphic Design​',
    content: 'Promote & brand your businesses with creative Graphics​. Design is all about making  designers feel like idiots because that idea wasn’t theirs.'
  },
  {
    id: '6',
    heading: 'Reputation Management',
    content: 'Maintain your business identity while your competitors are making every effort to dent it'
  },
];
const ServicesCardView = ({serviceItem}) => (
  <View
          style={styles.card_layout}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <View style={{flex: 1, padding: 8}}>
              <View style={{height: 60, justifyContent:'center'}}>
                <Text
                  style={styles.card_heading_text} numberOfLines={2}>
                  {serviceItem.heading}
                </Text>
              </View>
              <View style={{flex: 1, justifyContent:'center'}}>
                <Text
                  style={styles.card_content_text}
                  numberOfLines={8}
                  >
                  {serviceItem.content}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
);

const renderServicesCardView = ({item}) => {
  return (
    <ServicesCardView
      serviceItem={item}/>
  );
};;
const Services = () => {
  
  return (
    <View style={{flex:1}}>
      <View style={{height: 60, justifyContent:'center'}}>
                <Text
                  style={styles.heading_text} numberOfLines={2}>
                    SERVICES
                </Text>
              </View>
      <FlatList
      data={SERVICES_DATA}
      renderItem={ renderServicesCardView }
      keyExtractor={item=>item.id}
      numColumns={2}
      style={styles.container}
      contentContainerStyle={styles.list}
      />
    </View>
  );
};
export default Services;

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
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  // column: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   justifyContent: 'flex-start',
  //   padding: 8,
  //   flexDirection: 'column',
  // },
  // column_row:{
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   height: 160,
  // },
  card_layout:{
    // height: 160,
    // width: 170,
    height: 170,
    width: 180,
    borderRadius: 10,
    justifyContent: 'flex-start',
    elevation: 8,
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
