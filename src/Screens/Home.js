import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <ScrollView>
      <View style={{flex: 1, flexDirection: 'column', padding: 8}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 32,
            marginBottom: 32,
            padding: 16,
          }}>
          <Image source={require('../Asset/Home/flourisense.jpg')} />
        </View>

        <View>
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
        </View>

        <View>
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
              numberOfLines={5}
              >
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
              <Text style={{color: '#fff', fontWeight: 'bold'}}>CALL US TODAY</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
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
              <Text style={{color: '#fff', fontWeight: 'bold'}}>JOIN US TODAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
