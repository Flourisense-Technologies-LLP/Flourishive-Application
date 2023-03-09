import React from 'react';
import {View, Text, Image} from 'react-native';

const NoDataAvailablePage = () => {
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
          source={require('../../Asset/errors/no_data.png')}
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
          No data is available
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
          It, seems no relevant data is available which match up to your request.
        </Text>
      </View>
    </View>
  );
};
export default NoDataAvailablePage;

