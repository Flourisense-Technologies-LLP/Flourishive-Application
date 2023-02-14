import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import Button from './Button'
import Input from './Input'

const NewPass = () => {
  return (
    <SafeAreaView style ={{flex: 1, padding: 16}}>
        {/* console.log(props); */}
        <View>
            <Text style={{fontSize: 33, paddingTop: 60, color: '#000000', fontWeight: 'bold'}}>
                Enter New Password
            </Text >
            <Text style={{fontSize: 16, color: "#000000", paddingTop: 33}}>Please enter your email. You will receive a link to create a new password via email.</Text>
            <View>
                <Input 
                    label={"Email"}
                    iconName={"email-outline"}
                    placeholder={"New Password"}
                    password
                />

                <Input
                    label={"Email"}
                    iconName={"email-outline"}
                    placeholder={"Confirm Password"}
                    password
                />

                <Button
                    title={"CHANGE PASSWORD"}
                />
                
            </View>
        </View>
    </SafeAreaView>  
  )
}

export default NewPass