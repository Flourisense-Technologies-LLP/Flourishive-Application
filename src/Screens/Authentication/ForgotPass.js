import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import Button from './Button'
import Input from './Input'

const ForgotPass = () => {
  return (
    <SafeAreaView style ={{flex: 1, padding: 16}}>
        {/* console.log(props); */}
        <View>
            <Text style={{fontSize: 33, paddingTop: 60, color: '#000000', fontWeight: 'bold'}}>
                Forgot Password
            </Text >
            <Text style={{fontSize: 16, color: "#000000", paddingTop: 33}}>Please enter your email. You will receive a link to create a new password via email.</Text>
            <View>
                <Input 
                    label={"Email"}
                    iconName={"email-outline"}
                    placeholder={"Email"}
                />

                <Button
                    title={"SEND"}
                />
                
            </View>
        </View>
    </SafeAreaView>  
  )
}

export default ForgotPass