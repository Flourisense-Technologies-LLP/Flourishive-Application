import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <View>
      <ImageBackground source={require('../Asset/Home/background.png')}>
        <ScrollView
          style={{ImageBackground: require('../Asset/Home/background.png')}}>
          <View style={{flex: 1, flexDirection: 'column', margin: 0}}>
            <ImageBackground
              // source={require('../Asset/Home/ic_ellips_background.png')}
              style={{height: 450}}>
              <ImageBackground
                source={require('../Asset/Home/ic_ellips_background_front.png')}
                style={{height: 450}}>
                <View>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 64,
                    }}>
                    <Image
                      source={require('../Asset/Home/flourisense_logo.png')}
                      style={{height: 270, width: 270}}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 32,
                    }}>
                    <Image
                      source={require('../Asset/Home/full_logo_flourisense.png')}
                      style={{height: 100, width: 200}}
                    />
                  </View>
                </View>
              </ImageBackground>
            </ImageBackground>

            <View
              style={{
                margin: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={require('../Asset/Home/hr_line_flower.png')}
                style={{height: 40}}
              />
            </View>

            <View style={{marginTop: 64}}>
              <View style={{marginVertical: 16, alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#E9282B',
                    textAlign: 'center',
                  }}>
                  OUR AMAZING CLIENTS
                </Text>
              </View>
              <View style={{marginVertical: 8, alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#000000',
                    textAlign: 'center',
                  }}>
                  Solving business problems is in our DNA. And Flourisense tech
                  has the technology expertise to make this happen.
                </Text>
              </View>
              <View style={{flex: 1}}>
                <FlatList
                  data={CLIENTS_DATA}
                  renderItem={renderClientsCardView}
                  keyExtractor={item => item.id}
                  numColumns={2}
                  style={styles.container}
                  contentContainerStyle={styles.list}
                />
              </View>
            </View>

            <View
              style={{
                margin: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={require('../Asset/Home/hr_line_flower.png')}
                style={{height: 40}}
              />
            </View>

            <View style={{marginTop: 64}}>
              <View style={{marginVertical: 16, alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#E9282B',
                    textAlign: 'center',
                  }}>
                  HERE’S WHY PEOPLE CHOOSE TO WORK WITH FLOURISENSE
                </Text>
              </View>
              <View style={{marginVertical: 8, alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#000000',
                    textAlign: 'center',
                  }}
                  numberOfLines={5}>
                  Flourisense designs and builds intelligent, cost-effective and
                  intuitive web applications, cloud systems, desktop
                  applications and mobile apps that help streamline processes
                  for businesses as well as create new revenue streams for
                  start-ups and established businesses alike. With office in
                  Pune, Flourisense is the India’s leading bespoke software
                  development company, with a fully in-house 300+ team of expert
                  software developers and technology professionals specialising
                  in both Microsoft and the MEAN stack.
                </Text>
              </View>
              <View style={{marginVertical: 8, alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={null}
                  accessibilityLabel="Learn more about opportunities at flourisense"
                  style={{
                    backgroundColor: '#E9282B',
                    padding: 12,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    CALL US TODAY
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <FlatList
                  data={SERVICES_DATA}
                  renderItem={renderServicesCardView}
                  keyExtractor={item => item.id}
                  style={styles.container}
                  contentContainerStyle={styles.list}
                />
              </View>
            </View>

            <View
              style={{
                margin: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={require('../Asset/Home/hr_line_flower.png')}
                style={{height: 40}}
              />
            </View>

            <View style={{marginTop: 64}}>
              <View style={{marginVertical: 16, alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#E9282B',
                    textAlign: 'center',
                  }}>
                  CONNECT WITH US
                </Text>
              </View>
              <View style={{marginVertical: 8, alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#000000',
                    textAlign: 'center',
                  }}>
                  We Are Looking For Creative People For Web/App Internship
                  Opportunities
                </Text>
              </View>
              <View style={{marginVertical: 8, alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={null}
                  accessibilityLabel="Learn more about opportunities at flourisense"
                  style={{
                    backgroundColor: '#E9282B',
                    padding: 12,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    JOIN US TODAY
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                margin: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={require('../Asset/Home/hr_line_flower.png')}
                style={{height: 40}}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default Home;

const CLIENTS_DATA = [
  {
    id: '1',
    image: require('../Asset/clients/client_swaraj_associate.png'),
  },
  {
    id: '2',
    image: require('../Asset/clients/client_axio.png'),
  },
  {
    id: '3',
    image: require('../Asset/clients/client_bits.png'),
  },
  {
    id: '5',
    image: require('../Asset/clients/client_fern_stays.png'),
  },
];
const ClientsCardView = ({clientItem}) => (
  <View style={styles.card_layout}>
    <ImageBackground
      source={clientItem.image}
      resizeMode="contain"
      style={styles.image}></ImageBackground>
  </View>
);
const renderClientsCardView = ({item}) => {
  return <ClientsCardView clientItem={item} />;
};

const SERVICES_DATA = [
  {
    id: '1',
    service: 'BrainStorming And Ideathon',
    description:
      'From B2B or B2E apps for enterprises, small businesses, and startups, we have a proven track record of offering high-impact, result driven and engaging mobile application development services.',
    image: require('../Asset/services/specializations/specialization_mobile_app_developement.png'),
  },
  {
    id: '2',
    service: '100% Satisfaction guaranteed',
    description:
      'Being a leading website application development company, our certified developers have unparalleled expertise in working with the latest web technologies to deliver custom web solutions.',
    image: require('../Asset/services/specializations/specialization_mobile_app_developement.png'),
  },
  {
    id: '3',
    service: '24/7 Support',
    description:
      'UI/UX design is the catalyst behind the success of any web or mobile app. Flourisense is a leading web design and mobile app design agency with a knack of turning great ideas into meaningful interactions. ',
    image: require('../Asset/services/specializations/specialization_mobile_app_developement.png'),
  },
];
const ServicesCardView = ({serviceItem}) => (
  <View style={styles.services_card_layout}>
    <View style={{height: 160, justifyContent: 'center'}}>
      <ImageBackground
        source={require('../Asset/Home/card_background.png')}
        resizeMode="cover"
        style={styles.image2}>
        <Image
          source={serviceItem.image}
          resizeMode="contain"
          style={styles.image_icon}
        />
      </ImageBackground>
    </View>
    <View style={{flex: 1, padding: 8}}>
      <View style={{height: 30, alignItems: 'center'}}>
        <Text style={styles.services_card_heading_text} numberOfLines={2}>
          {serviceItem.service}
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.services_card_content_text} numberOfLines={5}>
          {serviceItem.description}
        </Text>
      </View>
    </View>
    <View></View>
  </View>
);

const renderServicesCardView = ({item}) => {
  return <ServicesCardView serviceItem={item} />;
};

const styles = StyleSheet.create({
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
    borderRadius: 10,
    height: 120,
    width: 160,
  },
  image2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  card_layout: {
    height: 120,
    width: 160,
    borderRadius: 10,
    justifyContent: 'flex-start',
    margin: 3,
  },
  services_card_layout: {
    height: 320,
    width: 360,
    borderRadius: 10,
    justifyContent: 'flex-start',
    borderColor: '#6E798C',
    borderWidth: 1,
    margin: 8,
  },
  services_card_subtitle_text: {
    color: '#6E798C',
    fontSize: 14,
    fontWeight: 'bold',
  },
  services_card_heading_text: {
    color: '#081F32',
    fontSize: 18,
    fontWeight: 'bold',
  },

  services_card_content_text: {
    color: '#374A59',
    fontSize: 14,
  },
  image_icon: {
    width: 120,
    height: 120,
  },
});
