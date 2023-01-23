import React from 'react'
import {View , Text, ScrollView, StyleSheet, ImageBackground} from 'react-native'


const JoinUs = () => {
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
            <Text style={{color:'#fff' , textAlign:'center' , fontSize:15}}>We Are Looking For Creative People For Web,App,Database,Infra And DevOps,CMS Internship Opportunities.</Text>
            
            <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Apply</Text>
            </View>

          </View>
        </ImageBackground>
        </View>

        <View style={styles.headerWrapper}>
          <Text style={styles.heading}>Internship Domain's</Text>
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
    fontWeight: 'bold',
    color: '#E9282B',
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
    fontWeight: 'bold',
    color: '#fff',
  },
});

