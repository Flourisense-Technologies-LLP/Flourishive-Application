import React from 'react'
import {View , Text, ScrollView, StyleSheet, ImageBackground , Image , FlatList} from 'react-native'

const Data = [
  {
    id:'1',
    img:require('../Asset/webdevImg.jpg'),
    name:'Web development',
    desc:'We’re looking for a skilled web developer to join our team of innovative designers who are consistently raising the bar on creativity and user experiences.'
  },
  {
    id:'2',
    img:require('../Asset/appdevImg.jpg'),
    name:'App development',
    desc:'We’re looking for a skilled App developer to join our team of innovative designers who are consistently raising the bar on creativity and user experiences.'
  },
  {
    id:'3',
    img:require('../Asset/hrdevImg.jpg'),
    name:'Human Resource',
    desc:'We’re looking for a skilled web developer to join our team of innovative designers who are consistently raising the bar on creativity and user experiences.'
  },
  {
    id:'4',
    img:require('../Asset/aimldevImg.jpg'),
    name:'AI & ML',
    desc:'We’re looking for a skilled web developer to join our team of innovative designers who are consistently raising the bar on creativity and user experiences.'
  },
  {
    id:'5',
    img:require('../Asset/wpdevImg.jpg'),
    name:'WorldPress Dev',
    desc:'We’re looking for a skilled web developer to join our team of innovative designers who are consistently raising the bar on creativity and user experiences.'
  },
  {
    id:'6',
    img:require('../Asset/cwdevImg.jpg'),
    name:'Content Writer',
    desc:'We’re looking for a skilled web developer to join our team of innovative designers who are consistently raising the bar on creativity and user experiences.'
  },
];


const JoinUs = () => {

  const Item = ({item}) => {
    return(
      <View style={{width:'40%' , borderWidth:1 , borderColor:'#D9D0E3' , backgroundColor:'#F6DBDB' , marginHorizontal:20 , marginVertical:5}}> 
            <Image source={item.img} style={{height:100 , width:'100%'}}/>
            <Text style={[styles.CardHeading,{alignSelf:'center'}]}>{item.name}</Text>
            <Text style={[styles.CardText]}>We’re looking for a skilled web developer to join our team of innovative designers who are consistently raising the bar on creativity and user experiences.</Text>
        </View>
    );
  }

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.headerWrapper}>
          <Text style={styles.heading}>Internship Opportunities</Text>
        </View>
        
        <View style={{padding:15}}>
        <ImageBackground source={require('../Asset/company.jpg')}>
          <View style={{height:200,backgroundColor:'rgba(0, 0, 0, 0.6)',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'#fff' , textAlign:'center' , fontSize:20,fontWeight:'bold'}} >Join Us</Text>
            <Text style={{color:'#fff' , textAlign:'center' , fontSize:15,fontFamily:'Roboto-Medium'}}>We Are Looking For Creative People For Web,App,Database,Infra And DevOps,CMS Internship Opportunities.</Text>
            
            <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Apply</Text>
            </View>

          </View>
        </ImageBackground>
        </View>

        <View style={styles.headerWrapper}>
          <Text style={styles.heading}>Internship Domain's</Text>
        </View>
        <View>
          <FlatList 
            data={Data}
            numColumns={2}
            renderItem={({item}) => <Item item={item}/>}
            keyExtractor={item => item.id}
          />
        </View>
        </ScrollView>
    </View>
  )
}

export default JoinUs


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
    fontFamily:'Roboto-Bold',
    color: '#E9282B',
  },
  CardHeading: {
    fontSize: 15,
    fontFamily:'Roboto-Medium',
    color: '#454545',
    marginVertical:3
  },
  CardText: {
    fontSize: 11,
    fontFamily:'Roboto-Regular',
    color: '#454545',
    textAlign:'center',
    paddingVertical:5
  },
  buttonWrapper: {
    width: 100,
    height: 30,
    backgroundColor: '#E9282B',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:10
  },
  buttonText: {
    fontSize: 15,
    fontFamily:'Roboto-Bold',
    color: '#fff',
  },
});

