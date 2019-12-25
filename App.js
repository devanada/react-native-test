import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import BoxObjectScreen from './src/screens/BoxObjectScreen';
import FlexBoxScreen from './src/screens/FlexBoxScreen';
import PositionScreen from './src/screens/PositionScreen';
import AlignItemScreen from './src/screens/flex_box/AlignItemScreen';
import FlexDirectionScreen from './src/screens/flex_box/FlexDirectionScreen';
import JustifyContentScreen from './src/screens/flex_box/JustifyContentScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Box: BoxObjectScreen,
    FlexBox: FlexBoxScreen,
    Position: PositionScreen,
    Align: AlignItemScreen,
    FlexDirection: FlexDirectionScreen,
    Justify: JustifyContentScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
