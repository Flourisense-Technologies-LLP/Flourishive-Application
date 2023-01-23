import React from 'react'
import {View , Text, ScrollView, FlatList, Image} from 'react-native'

const cardData = [
  {
    id: 1,
    img: require('../Asset/slider/tech.jpg'),
    heading: 'Front End',
    desc: 'Angular, React Js, Vue.'
  },
  {
    id: 2,
    img: require('../Asset/slider/tech.jpg'),
    heading: 'Front End',
    desc: 'Angular, React Js, Vue.'
  },
  {
    id: 3,
    img: require('../Asset/slider/tech.jpg'),
    heading: 'Front End',
    desc: 'Angular, React Js, Vue.'
  },
  {
    id: 4,
    img: require('../Asset/slider/tech.jpg'),
    heading: 'Front End',
    desc: 'Angular, React Js, Vue.'
  },
  {
    id: 5,
    img: require('../Asset/slider/tech.jpg'),
    heading: 'Front End',
    desc: 'Angular, React Js, Vue.'
  },
  {
    id: 6,
    img: require('../Asset/slider/tech.jpg'),
    heading: 'Front End',
    desc: 'Angular, React Js, Vue.'
  }
]

const Technologies = () => {

  const renderItem = ({item})=>(
    <View style ={{width: '48%', margin: '1%', borderWidth: .55, borderRadius: 10} }>
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
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#E9282B', paddingBottom: 20, marginTop: 20, marginBottom: 20}}>
            Technologies On Which we work
          </Text>

          <></>
        </View>

    </ScrollView>
    
  )
}

export default Technologies
