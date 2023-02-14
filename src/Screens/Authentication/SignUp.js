import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import Button from './Button'
import Input from './Input'

const SignUp = () => {
    return (
        <SafeAreaView style ={{flex: 1, padding: 16}}>
        <View>
            <Text style={{fontSize: 33, paddingTop: 60, color: '#000000', fontWeight: 'bold'}}>
                Sign Up
            </Text>
            <View>
                <Input 
                    label={"Email"}
                    iconName={"email-outline"}
                    placeholder={"Email"}
                />

                <Input 
                    label={"Name"}
                    iconName={"email-outline"}
                    placeholder={"Name"}
                />

                <Input 
                    label={"Phone"}
                    iconName={"email-outline"}
                    placeholder={"Phone"}
                />

                <Input 
                    label={"Email"}
                    iconName={"lock"}
                    placeholder={"Password"}
                    password
                />


                <Button
                    title={"SIGN UP"}
                />

                <View style={{flexDirection: 'row'}}>
                    <Text style={{paddingTop: 33, color: '#000000', fontSize: 16}}>Already have an account? </Text>
                    <Text style={{paddingTop: 33, color: '#E9282B', fontSize: 16}}>Sign In</Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
    )
}

export default SignUp