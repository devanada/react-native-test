import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import BasicScreen from './src/screens/BasicScreen';
import UserScreen from './src/screens/UserScreen';
import ViewScreen from './src/screens/ViewScreen';
import ComponentsScreen from './src/screens/basic_components/ComponentsScreen';
import ListScreen from './src/screens/basic_components/ListScreen';
import ImageScreen from './src/screens/basic_components/ImageScreen';
import TextScreen from './src/screens/basic_components/TextScreen';
import PickerScreen from './src/screens/user_interface/PickerScreen';
import SliderScreen from './src/screens/user_interface/SliderScreen';
import SwitchScreen from './src/screens/user_interface/SwitchScreen';
import FlatListScreen from './src/screens/list_view/FlatListScreen';
import SectionListScreen from './src/screens/list_view/SectionListScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Text: TextScreen,
    Basic: BasicScreen,
    User: UserScreen,
    View: ViewScreen,
    Picker: PickerScreen,
    Slider: SliderScreen,
    Switch: SwitchScreen,
    Flat: FlatListScreen,
    Section: SectionListScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
