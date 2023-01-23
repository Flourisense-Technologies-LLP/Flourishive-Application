import React from 'react'
import {View , Text, Image} from 'react-native'


const Home = () => {
  return (
    <View style={{flex: 1, padding: 11}}>

        <View style={{backgroundColor: '#E9282B', height: 345, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../Asset/Home/flourisense.jpg')}/>
          <Text style={{color: '#FFFFFF', fontSize: 22, paddingTop: 50}}>
            Welcome to flourisense
          </Text>
        </View>

        <View>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#E9282B', justifyContent: 'center', paddingBottom: 20, paddingTop: 20}}>
            Here's why people choose to work with Flourisense?
          </Text>

          <Text style={{color: '#0093D3', fontWeight: 18, fontWeight: 'bold', paddingBottom: 15}}>
            Our Specialization
          </Text>

          <Text>
            A great services educates and informs your audience about the variety of services your business offers.
            It describes how your services benefit those who use them and guides people in the direction of services that will be most valuable for them.
          </Text>

        </View>
        
    </View>
  )
}

export default Home
