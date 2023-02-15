import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

const Button = ({title, onPress = () => {}, navi}) => {
  const navigation = useNavigation()
  return (
    <View style={{paddingTop: 33}}>
    <TouchableOpacity 
        onPress={() => navigation.navigate("DrawerNavigation")}
        style={{height: 55, 
                width: '100%', 
                backgroundColor: '#E9282B', 
                borderWidth: .9, 
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: '#FFFFFF'}}>{title}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Button