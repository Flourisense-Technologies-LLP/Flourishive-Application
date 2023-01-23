import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const AboutUs = () => {
  return (
    <View style={styles.main}>
      <ScrollView>
      <View style={styles.headerWrapper}>
        <Text style={styles.heading}>OUR DIRECTOR'S</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View style={styles.card}>
          <View style={styles.CardHeader}>
            <Image
              source={require('../Asset/sumeet.jpeg')}
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardContentWrapper}>
            <Text style={styles.cardName}>Sumeet Balawade</Text>
            <Text style={styles.cardRole}>(Chief Executive Officer)</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.CardHeader}>
            <Image
              source={require('../Asset/deep.jpeg')}
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardContentWrapper}>
            <Text style={styles.cardName}>Deep Chakkar</Text>
            <Text style={styles.cardRole}>((Chief Technology Officer))</Text>
          </View>
        </View>
      </View>

      <View style={styles.headerWrapper}>
        <Text style={styles.heading}>Happy Customer’s</Text>
      </View>
      <View style={{height:250}}>

      </View>


      <View style={styles.headerWrapper}>
        <Text style={styles.heading}>Our Story</Text>
      </View>
      <View style={{alignItems:'center' , justifyContent:'center' , paddingHorizontal:20}}>
        <Image source={require('../Asset/team.jpeg')} style={{height:150 , width:'100%',borderWidth:1,borderColor:'#000000'}}/>
        <Text style={{textAlign:'center' , fontSize:18 , marginVertical:10 , color:'#232323'}}>We the Flourisense who believe in dreams. Our mission is to provide a quality services to our client that will help their companies  prosper and growth.</Text>
      </View>
   
      </ScrollView>
    </View>
  );
};

export default AboutUs;

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
    fontWeight: 'bold',
    color: '#E9282B',
  },

  card: {
    height: 200,
    backgroundColor: '#F6DBDB',
    width: 150,
    borderWidth: 1,
    borderColor: '#E9282B',
  },
  CardHeader: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImg: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  cardContentWrapper: {
    height: 50,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardRole: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#fff',
  },
});
