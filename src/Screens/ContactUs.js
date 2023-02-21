import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const ContactUs = () => {
  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
        <View style={styles.headerWrapper}>
          <Text style={styles.heading}>Contact INFO</Text>
        </View>

        <View style={styles.infoMainWrapper}>
          <View style={styles.infoWrapper}>
            <View style={styles.infoImgWrapper}>
              <Image source={require('../Asset/callIcon.png')} style={{height:20,width:20,resizeMode:'contain'}}/>
            </View>
            <View>
              <Text style={styles.infoHeading}>Call Us</Text>
              <Text style={styles.infoText}>+91 8788593832</Text>
            </View>
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.infoImgWrapper}>
              <Image source={require('../Asset/LocationIcon.png')} style={{height:20,width:20,resizeMode:'contain'}}/>
            </View>
            <View>
              <Text style={styles.infoHeading}>Our Location</Text>
              <Text style={styles.infoText}>H2R4+36 Wagholi, Pune,</Text>
              <Text style={styles.infoText}>Maharashtra, India</Text>
            </View>
          </View>
        </View>
        <View style={styles.infoMainWrapper}>
          <View style={styles.infoWrapper}>
            <View style={styles.infoImgWrapper}>
              <Image source={require('../Asset/EmailIcon.png')} style={{height:20,width:20,resizeMode:'contain'}}/>
            </View>
            <View>
              <Text style={styles.infoHeading}>Our Email</Text>
              <Text style={styles.infoText}>admin@flourisense.in</Text>
            </View>
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.infoImgWrapper}>
              <Image source={require('../Asset/ClockIcon.png')} style={{height:20,width:20,resizeMode:'contain'}}/>
            </View>
            <View>
              <Text style={styles.infoHeading}>Working Hours</Text>
              <Text style={styles.infoText}>Mon-Fri: 10AM-5PM</Text>
              <Text style={styles.infoText}>Sat-Sun: 10AM-1PM</Text>
            </View>
          </View>
        </View>

        <View style={styles.headerWrapper}>
          <Text style={styles.heading}>Send Us A Message</Text>
        </View>
        <View style={{paddingHorizontal: 15}}>
          <Text style={styles.placeholderText}>Name</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput placeholder="First Name" style={styles.halfInputFeild} />
            <TextInput placeholder="First Name" style={styles.halfInputFeild} />
          </View>
          <Text style={styles.placeholderText}>E-mail</Text>
          <TextInput placeholder="E-mail" style={styles.inputFeild} />
          <Text style={styles.placeholderText}>Number</Text>
          <TextInput placeholder="Number" style={styles.inputFeild} />
          <Text style={styles.placeholderText}>Subject</Text>
          <TextInput placeholder="Subject" style={styles.inputFeild} />
          <Text style={styles.placeholderText}>Message</Text>
          <TextInput
            placeholder="Message........"
            multiline={true}
            numberOfLines={5}
            style={styles.textAreaFeild}
          />
        </View>

        <View style={{alignItems: 'center', marginVertical: 15}}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal:15
  },
  headerWrapper: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  heading: {
    fontSize: 18,
    fontFamily:'Roboto-Bold',
    color: '#E9282B',
  },
  infoMainWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  infoImgWrapper: {
    height: 40,
    width: 40,
    backgroundColor: '#F6DBDB',
    borderRadius: 50,
    marginHorizontal: 10,
    alignItems:'center',
    justifyContent:'center'
  },
  infoHeading: {
    fontSize: 18,
    fontFamily:'Roboto-Bold',
    color: '#0093D3',
  },
  infoText: {
    fontSize: 12,
    fontFamily:'Roboto-Medium',
    color: '#838383',
  },
  placeholderText: {
    marginVertical: 10,
    fontSize: 15,
    fontFamily:'Roboto-Bold',
    color: '#000',
  },
  inputFeild: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius:5,
    borderColor:'#D9D0E3',
    paddingHorizontal:20
  },
  halfInputFeild: {
    width: '49%',
    height: 40,
    borderWidth: 1,
    borderRadius:5,
    borderColor:'#D9D0E3',
    paddingHorizontal:20
  },
  textAreaFeild: {
    width: '100%',
    height: 120,
    borderWidth: 1,
    textAlignVertical: 'top',
    borderRadius:5,
    borderColor:'#D9D0E3',
    paddingHorizontal:20
  },
  buttonWrapper: {
    width: 120,
    height: 40,
    backgroundColor: '#E9282B',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily:'Roboto-Bold',
    color: '#fff',
  },
});
