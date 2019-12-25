import { createMaterialTopTabNavigator } from "react-navigation";

import PageA from "../../views/Home/PageA";
import PageB from "../../views/Home/PageB";

const CustomTabNavigator = createMaterialTopTabNavigator(
  {
    PageA: {
      navigationOptions: {
        tabBarLabel: "Page A"
      },
      screen: PageA
    },
    PageB: {
      navigationOptions: {
        tabBarLabel: "Page B"
      },
      screen: PageB
    }
  },
  {
    tabBarPosition: "bottom"
  }
);

export default CustomTabNavigator;