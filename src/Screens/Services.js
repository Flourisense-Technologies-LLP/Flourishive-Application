import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';


const SERVICES_DATA = [
  {
    id: '1',
    heading: 'Web Designing',
    content:
      'When it comes to promote your business online presence, there is no better starting point than a professional, neat web design.',
  },
  {
    id: '2',
    heading: 'Social Media Marketing',
    content:
      'Social media community management & marketing. Marketers need to build digital relationships and reputation before closing a sale',
  },
  {
    id: '3',
    heading: 'Search Engine Optimization',
    content:
      'The future of SEO is here – understanding and marketing to specific and defined audiences through search engines.',
  },
  {
    id: '4',
    heading: 'Social Media Campaigning',
    content:
      'Improving overall brand engagement.Marketing is to know and understand the customer so well the product or service fits him and sells itself',
  },
  {
    id: '5',
    heading: 'Graphic Design​',
    content:
      'Promote & brand your businesses with creative Graphics​. Design is all about making  designers feel like idiots because that idea wasn’t theirs.',
  },
  {
    id: '6',
    heading: 'Reputation Management',
    content:
      'Maintain your business identity while your competitors are making every effort to dent it',
  },
];

const SPECIALIZATION_DATA = [
  {
    id: '1',
    service: 'Mobile Apps Development',
    description: 'From B2B or B2E apps for enterprises, small businesses, and startups, we have a proven track record of offering high-impact, result driven and engaging mobile application development services.',
    image: require('../Asset/services/specializations/specialization_mobile_app_developement.png')
  },
  {
    id: '2',
    service: 'Web Development',
    description: 'Being a leading website application development company, our certified developers have unparalleled expertise in working with the latest web technologies to deliver custom web solutions.',
    image: require('../Asset/services/specializations/specialization_mobile_app_developement.png')
  },
  {
    id: '3',
    service: 'UX/UI Design',
    description: 'UI/UX design is the catalyst behind the success of any web or mobile app. Flourisense is a leading web design and mobile app design agency with a knack of turning great ideas into meaningful interactions. ',
    image: require('../Asset/services/specializations/specialization_mobile_app_developement.png')
  },
  {
    id: '4',
    service: 'AI-ML App Development',
    description: 'Looking to add intelligence to your existing business application or want to develop a new one? You are in the right place. Our AI-ML engineers will help you do that. We have expertise in working with tools, frameworks and technologies.',
    image: require('../Asset/services/specializations/specialization_mobile_app_developement.png')
  },
  
];




const Services = () => {
  const image = require('../Asset/services/service_card_background.png');

  const ServicesCardView = ({serviceItem}) => (
    <View style={styles.service_card_layout}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{flex: 1, padding: 8}}>
          <View style={{height: 60, justifyContent: 'center'}}>
            <Text style={styles.card_heading_text} numberOfLines={2}>
              {serviceItem.heading}
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.card_content_text} numberOfLines={8}>
              {serviceItem.content}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
  const renderServicesCardView = ({item}) => {
    return <ServicesCardView serviceItem={item} />;
  };
  
  const SpecializationCardView = ({serviceItem}) => (
    <View style={styles.specialization_card_layout}>
      <View style={{height: 160, justifyContent: 'center'}}>
      <ImageBackground source={require('../Asset/services/specialization_card_background.png')} resizeMode="cover" style={styles.image}>
        <Image source={serviceItem.image}  resizeMode="contain" style={styles.image_icon}/>
      </ImageBackground>
      </View>
      <View style={{flex: 1, padding: 8}}>
          <View style={{height: 30,alignItems: 'flex-start'}}>
            <Text style={styles.specialization_card_subtitle_text} numberOfLines={2}>
              SPECIALIZATION
            </Text>
          </View>
          <View style={{height: 30,alignItems: 'flex-start'}}>
            <Text style={styles.specialization_card_heading_text} numberOfLines={2}>
              {serviceItem.service}
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.specialization_card_content_text} numberOfLines={8}>
              {serviceItem.description}
            </Text>
          </View>
        </View>
      <View>
  
      </View>
    </View>
  
  );
  
  const renderSpecializationCardView = ({item}) => {
    return <SpecializationCardView serviceItem={item} />;
  };

  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.headerWrapper}>
          <Text style={styles.heading}>
            SERVICES
          </Text>
        </View>
        <FlatList
          data={SERVICES_DATA}
          renderItem={renderServicesCardView}
          keyExtractor={item => item.id}
          numColumns={2}
          style={styles.container}
          contentContainerStyle={styles.list}
        />
        <View style={{height: 60, justifyContent: 'center', marginTop:32}}>
        <View style={styles.headerWrapper}>
          <Text style={styles.heading}>
            OUR SPECIALIZATION
          </Text>
        </View>
        </View>
      <FlatList
          data={SPECIALIZATION_DATA}
          renderItem={renderSpecializationCardView}
          keyExtractor={item => item.id}
          style={styles.container}
          contentContainerStyle={styles.list}
        />
        </View>
    </ScrollView>
  );
};

export default Services;



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
    fontFamily:'Roboto-Bold'
  },
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'column',
  },
  list: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  image_icon: {
    width: 120,
    height: 120,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },

  service_card_layout: {
    height: 170,
    width: 180,
    borderRadius: 10,
    justifyContent: 'flex-start',
    elevation: 8,
    margin: 3,
  },
  specialization_card_layout: {
    height: 320,
    width: 360,
    borderRadius: 10,
    justifyContent: 'flex-start',
    borderColor:'#D9D0E3',
    borderWidth: 2,
    margin: 3,
  },
  heading_text: {
    color: 'red',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 15,
  },
  card_heading_text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily:'Roboto-Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  card_content_text: {
    color: 'white',
    fontSize: 12,
    fontFamily:'Roboto-Regular',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  specialization_card_subtitle_text: {
    color: '#6E798C',
    fontSize: 14,
    fontFamily:'Roboto-Bold',
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    // textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 4,
  },
  specialization_card_heading_text: {
    color: '#081F32',
    fontSize: 18,
    fontFamily:'Roboto-Bold',
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    // textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 4,
  },

  specialization_card_content_text: {
    color: '#374A59',
    fontSize: 14,
    fontFamily:'Roboto-Regular'
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    // textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 4,
  },
});
