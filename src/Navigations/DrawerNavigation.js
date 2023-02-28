import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import Services from '../Screens/Services';
import Technologies from '../Screens/Technologies';
import Clients from '../Screens/Clients';
import AboutUs from '../Screens/AboutUs';
import ContactUs from '../Screens/ContactUs';
import JoinUs from '../Screens/JoinUs';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {


  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} initialRouteName='Home'>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Technologies" component={Technologies} />
      <Drawer.Screen name="Clients" component={Clients} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="JoinUs" component={JoinUs} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
