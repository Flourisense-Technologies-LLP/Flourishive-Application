import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, View, Text, TextInput } from 'react-native'
import Button from './Button'
import Input from './Input'


const SignIn = () => {
const navigation = useNavigation()

  return (
    <SafeAreaView style ={{flex: 1, padding: 16}}>
        <View>
            <Text style={{fontSize: 33, paddingTop: 60, color: '#000000', fontWeight: 'bold'}}>
                Sign In
            </Text>
            <View>
                <Input 
                    label={"Email"}
                    iconName={"email-outline"}
                    placeholder={"Email"}
                />

                <Input 
                    label={"Email"}
                    iconName={"lock"}
                    placeholder={"Password"}
                    password
                />

                <Text style={{textAlign: 'right', color: '#E9282B', paddingTop: 15, fontSize: 16}}
                        onPress={() => navigation.navigate("ForgotPass")}>Forgot Password?</Text>

                <Button
                    title={"SIGN IN"}
                    navi={"DrawerNavigation"}
                />

                <View style={{flexDirection: 'row'}}>
                    <Text style={{paddingTop: 33, color: '#000000', fontSize: 16}} >Don't have an account? </Text>
                    <Text style={{paddingTop: 33, color: '#E9282B', fontSize: 16}} 
                            onPress={() => navigation.navigate("SignUp")}>
                                Sign Up
                    </Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default SignIn