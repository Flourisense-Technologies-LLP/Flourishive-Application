import React from 'react'
import { View, Text, ScrollView, FlatList, Image, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const cardData = [
  {
    id: 1,
    img: require('../Asset/slider/tech.jpg'),
    heading: 'Front End',
    desc: 'Angular, React Js, Vue.asdfadfadfa Angular, React Js, Vue.asdfadfadfa'
  },
  {
    id: 2,
    img: require('../Asset/Tech/wordPress.jpg'),
    heading: 'Word Press',
    desc: 'WordPress is a content management system (CMS) that allows you to host and build websites.'
  },
  {
    id: 3,
    img: require('../Asset/Tech/gameDev.jpg'),
    heading: 'Game Development',
    desc: 'Gamers can feel when developers are passionate about their games'
  },
  {
    id: 4,
    img: require('../Asset/Tech/application.jpg'),
    heading: 'Application Development',
    desc: 'An app is not all about technology It is a dream for future.'
  },
  {
    id: 5,
    img: require('../Asset/Tech/cyberSec.jpg'),
    heading: 'Cyber Security',
    desc: 'Cyber-Security is much more than a matter of IT.'
  },
]

const Technologies = () => {
  const tab = ({ item }) => (
    <View style={{ width: width}}>
      <View style={{padding: 11, flexDirection: 'row'}}>
        <Image source={item.img} style={{borderRadius: 10, margin: 11}}/>
        <Text style={{width: width/2, margin: 11, paddingRight: 10}}>
          {item.desc}
        </Text>
      </View>
    </View>
  )

  const renderItem = ({item})=>(
    <View style ={{width: '48%', margin: '1%', borderWidth: 1, borderRadius: 10} }>
      <Image source={item.img}/>
      <Text 
        style={{marginLeft: 16, 
        fontWeight: 'bold', 
        fontSize: 20,
        paddingTop: 5}}>
          {item.heading}
      </Text>

      <Text style={{marginLeft: 16, paddingBottom: 5}}>
        {item.desc}
      </Text>
    </View>
  );
    

  return (
    <ScrollView>
      <View >
        <View style={{padding: 11}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#E9282B', marginTop: 20, marginBottom: 20}}>
            Technologies
          </Text>
          <FlatList
            numColumns={2}
            data={cardData}
            keyExtractor={(item,index) => index.toString()}
            renderItem={renderItem}
            
          />
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#E9282B', paddingBottom: 10, marginTop: 20, marginBottom: 20}}>
            Technologies On Which we work
          </Text>
      </View>

      <View style = {{}}>
      <FlatList
          style ={{borderWidth: 1, borderRadius: 10}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={cardData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={tab}
          pagingEnabled
        />
      </View>
    </View>
    </ScrollView>

  )
}

export default Technologies
