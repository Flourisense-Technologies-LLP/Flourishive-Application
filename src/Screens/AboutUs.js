import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView,FlatList} from 'react-native';
// import Carousel from 'react-native-snap-carousel';

const Data = [
  {
    id:1,
    name:'Jhon Doe',
    desc:'this is ver good  company that full fills my all requirements on time',
    img:require('../Asset/satya.jpg'),
    company:'fern stays'
  },
  {
    id:2,
    name:'Sundar Pichai',
    desc:'this is ver good  company that full fills my all requirements on time',
    img:require('../Asset/pichai.jpg'),
    company:'Google'
  },
  {
    id:3,
    name:'Elon Musk',
    desc:'this is ver good  company that full fills my all requirements on time',
    img:require('../Asset/elon.jpeg'),
    company:'Tesla'
  },
]

const AboutUs = () => {

  const Item = ({item}) => {
    return(
      <View style={{width:200,backgroundColor:'#132239',alignItems:'center',padding:10 , margin:10}}>
          <Image source={require('../Asset/quotesIcon.png')} style={{height:30,width:30,tintColor:'#fff',resizeMode:'contain'}}/>
          <Text style={styles.clientCardDesc}>“"Flourisense made my life easier as I no longer require a tech co-founder for my startup idea."”</Text>
          <Image source={item.img} style={{height:50,width:50,borderRadius:50}}/>
          <Text style={styles.clientCardName}>{item.name}</Text>
          <Text style={styles.clientCardCom}>CEO at {item.company}</Text>
      </View>
    );
  }


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
      <View>
        <FlatList 
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={Data}
          renderItem={({item})=><Item item={item}/>}
          keyExtractor={item => item.id}
        />
      </View>


      <View style={styles.headerWrapper}>
        <Text style={styles.heading}>Our Story</Text>
      </View>
      <View style={{alignItems:'center' , justifyContent:'center' , paddingHorizontal:20}}>
        <Image source={require('../Asset/team.jpeg')} style={{height:150 , width:'100%',borderWidth:1,borderColor:'#D9D0E3'}}/>
        <Text style={{textAlign:'center' , fontSize:18 , marginVertical:10 , color:'#232323',fontFamily:'Roboto-Regular'}}>We the Flourisense who believe in dreams. Our mission is to provide a quality services to our client that will help their companies  prosper and growth.</Text>
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
    color: '#E9282B',
    fontFamily:'Roboto-Bold'
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
    fontFamily:'Roboto-Bold',
    color: '#fff',
  },
  cardRole: {
    fontSize: 9,
    fontFamily:'Roboto-Bold',
    color: '#fff',
  },
  clientCardDesc:{
    color:'#fff',
    fontSize:18,
    fontFamily:'Roboto-Regular',
    marginVertical:10
  },
  clientCardName:{
    color:'#fff',
    fontSize:15,
    fontFamily:'Roboto-Bold'
  },
  clientCardCom:{
    color:'#fff',
    fontSize:13,
    fontFamily:'Roboto-Medium'
  }
});
