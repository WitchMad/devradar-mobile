import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'DevRadar',
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil no GitHub',
      }
    },
  }, {
    defaultNavigationOptions: {
      headerBackTitleVisible: false,
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#7240e7',
      }
    },
  })
);

export default Routes;