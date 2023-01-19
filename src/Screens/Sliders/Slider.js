import React,{useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import DrawerNavigation from '../../Navigations/DrawerNavigation';

const Data = [
  {
    id: 1,
    title: 'Who are we?',
    description:
      'We the Flourisense who believe in dreams. Our mission is to provide a quality services to our client that will help their companies  prosper and growth.',
    src: require('../../Asset/slider/slider1.jpg'),
  },
  {
    id: 2,
    title: 'How can we help you?',
    description:
      'Flourisense is an industry leading technology company working with Multinational Enterprises, SME’s and forward-thinking Start-Ups as their end-to-end solution partners for custom-tailored software, web and mobile apps.',
    src: require('../../Asset/slider/slider2.jpg'),
  },
  {
    id: 3,
    title: 'Who are we?',
    description:
      'We the Flourisense who believe in dreams. Our mission is to provide a quality services to our client that will help their companies  prosper and growth.',
    src: require('../../Asset/slider/slider3.jpg'),
  },
];

const Slider = () => {

  const [showPage, setShowPage] = useState(false)

  const Item = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 15,
          backgroundColor: '#FFFFFF',
        }}>
        <Image
          source={item.src}
          style={{width: '80%', height: 400, resizeMode: 'contain'}}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#ba2022',
            textAlign: 'center',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#80869A',
            textAlign: 'center',
          }}>
          {item.description}
        </Text>
      </View>
    );
  };

  if(!showPage){
    return (
      <AppIntroSlider
                  data={Data}
                  renderItem={item => Item(item)}
                  activeDotStyle={{backgroundColor:'red'}}
                  renderNextButton={()=>{
                      return(
                          <View style={{alignItems:'center' , borderRadius:25,paddingVertical:10,backgroundColor:'#ba2022'}}>
                            <Text style={{fontSize:16 , color:'#fff',fontWeight:'bold'}}>Next</Text>
                          </View>
                      )
                  }}
                  renderSkipButton={()=>{
                      return(
                        <View style={{bottom:670,flexDirection:'row-reverse',alignItems:'center'}}>
                        <Image source={require('../../Asset/slider/next.png')} style={{height:20,width:20,tintColor:'#ba2022',marginHorizontal:5}}/>
                        <Text style={{fontSize:16 , color:'#ba2022',fontWeight:'bold'}}>Skip</Text>
                      </View>
                      )
                  }}
                  renderDoneButton={()=>{
                      return(
                        <View style={{alignItems:'center' , borderRadius:25,paddingVertical:10,backgroundColor:'#ba2022'}}>
                        <Text style={{fontSize:16 , color:'#fff',fontWeight:'bold'}}>Done</Text>
                      </View>
                      )
                  }}
                  
                  onDone={()=>{setShowPage(true)}}
                  showSkipButton={true}
                  bottomButton
              />
          )
  }

  return(
      <DrawerNavigation/>
  )



};

export default Slider;
