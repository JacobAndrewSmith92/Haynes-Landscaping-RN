import {createStackNavigator} from 'react-navigation';
import Home from '../screens/Home';

const App = createStackNavigator({
  Home: {screen: Home},
});

export default App;