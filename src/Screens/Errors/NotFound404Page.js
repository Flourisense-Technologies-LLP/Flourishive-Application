import React from 'react';
import {View, Text, Image} from 'react-native';

const NotFound404Page = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column', padding: 16, alignItems: 'center', justifyContent: 'center',}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 0,
          height: 270, 
          width: 270,
        }}>
        <Image
          source={require('../../Asset/errors/error_404.png')}
          resizeMode="contain"
          style={{height: 250, width: 250}}
        />
      </View>
      <View style={{marginTop: 64}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000000',
            textAlign: 'center',
          }}>
          Not Found (404)
        </Text>
      </View>
      <View style={{marginVertical: 8, alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#6E798C',
            textAlign: 'center',
          }}>
          Sorry, the page you are looking for do not exist. Take me to home
          screen.
        </Text>
      </View>
    </View>
  );
};
export default NotFound404Page;

