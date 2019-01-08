// npm dependencies
import {createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

// component imports
import Home from '../screens/Home';
import Services from '../screens/services/Services';
import Maintenance from '../screens/services/MaintenanceServices';
import Irrigation from '../screens/services/IrrigationServices';
import Enhancements from '../screens/services/EnhancementServices';
import GetAQuote from '../screens/GetAQuote';
import ContactUs from '../screens/ContactUs';
import Settings from '../screens/Settings';

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: `Hayne's Landscaping & Irrigation`,
      headerStyle: {
        backgroundColor: 'pink',
      }
    })
  },
  Services: {
    screen: Services,
    navigationOptions: () => ({
      title: 'Our Core Services',

    })
  },
  Maintenance: {screen: Maintenance},
  Irrigation: {screen: Irrigation}  ,
  Enhancements: {screen: Enhancements},
  ContactUs: {screen: ContactUs},
  Settings: {screen: Settings},
  GetAQuote: {
    screen: GetAQuote,
    navigationOptions: () => ({
      title: 'Your Quote'
    })
  }
});




const AppContainer = createAppContainer(AppStack)

export default AppContainer
