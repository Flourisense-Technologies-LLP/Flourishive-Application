import React from 'react'
import {View, Text, TextInput} from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'

const Input = ({label, iconName, password, ...props}) => {

    const [hidePassword, setHidePassword] = React.useState(password)
  return (
    <View style={{paddingTop: 33}}>

        <View style={{height: 55, borderRadius: 30, borderWidth: .9, flexDirection: 'row'}}>
            <Icon 
                name={iconName}
            />
            <TextInput
                secureTextEntry={hidePassword}
                autoCorrect={false} 
                autoCapitalize="none"
                style={{flex: 1, fontSize: 16}} {...props}/>
        </View>
    </View>
  )
}

export default Input