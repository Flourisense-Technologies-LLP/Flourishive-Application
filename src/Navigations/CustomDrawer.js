import React from 'react'
import { View , Text, TouchableOpacity, Image} from 'react-native'
import { DrawerContentScrollView , DrawerItemList} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'

const CustomDrawer = (props) => {
  const navigation = useNavigation(); 
  return (
    <DrawerContentScrollView {...props}>
        <View style={{marginVertical: 30, alignItems:'center' , justifyContent:'center'}}>
          <View style={{height:100 , width:100}}>
            <Image source={require('../Asset/krishna.jpg')} style={{height:100,width:100,borderRadius:50,borderColor:'#BDC1CA',borderWidth:1}}/>
          </View>
          <Text style={{fontSize:18 , fontFamily:'Roboto-Bold' , color:'#E9282B' , marginVertical:10}}>Krishna Kale</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
          <Text style={{fontSize:16 , fontFamily:'Roboto-Bold' , color:'blue' }}>Edit</Text>
          </TouchableOpacity>
        </View>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer
