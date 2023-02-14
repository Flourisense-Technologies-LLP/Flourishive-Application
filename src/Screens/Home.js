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
      <ImageBackground source={require('../Asset/Home/background.png')} >
      <ScrollView style={{ImageBackground:require("../Asset/Home/background.png")}} >
      <View style={{flex: 1, flexDirection: 'column', margin: 8}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:32
          }}>
          <Image source={require('../Asset/Home/flourisense_logo.png')} style={{ height: 250, width: 250 }} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 32,
          }}>
          <Image source={require('../Asset/Home/flourisense.png')} style={{ height: 100, width: 200, tintColor:'#E9282B'  }}/>
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
              Solving business problems is in our DNA. And Flourisense tech has
              the technology expertise to make this happen.
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
              intuitive web applications, cloud systems, desktop applications
              and mobile apps that help streamline processes for businesses as
              well as create new revenue streams for start-ups and established
              businesses alike. With office in Pune, Flourisense is the India’s
              leading bespoke software development company, with a fully
              in-house 300+ team of expert software developers and technology
              professionals specialising in both Microsoft and the MEAN stack.
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

  card_layout: {
    height: 120,
    width: 160,
    borderRadius: 10,
    justifyContent: 'flex-start',
    margin: 3,
  },
});
