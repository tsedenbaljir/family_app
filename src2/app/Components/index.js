// import {createStackNavigator, createAppContainer} from 'react-navigation'; 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Home'; 
//import HomeScreen from './ImageHome/ImageIndex'; dvv nariinx
import LoginScreen from './Login'; 
import RegisterScreen from './Signup';  
import UserScreen from './UserProfile';
import Lessons from './Lessons';  
import NoteBook from './NoteBook';
// import MapScreen from './Map';
import CalendarScreen from './Calendar';
import CamerScreen  from './Camer';
const stackConfig = {
  User: {
    screen:UserScreen,
    navigationOptions:{  
      header:null
    }
  }, 
  Login: {
    screen:LoginScreen,
    navigationOptions:{ 
      header:null
    }
  },
  Register: {
    screen:RegisterScreen,
    navigationOptions:{ 
      header:null
    }
  },
  Home: {
    screen:HomeScreen,
    navigationOptions:{  
      header:null
    }
  },
  Lessons: {
    screen:Lessons,
    navigationOptions:{  
      header:null
    }
  },
  NoteBook: {
    screen:NoteBook,
    navigationOptions:{  
      header:null
    }
  },
  // Map: {
  //   screen:MapScreen,
  //   navigationOptions:{  
  //     header:null
  //   }
  // },
  Calendar: {
    screen:CalendarScreen,
    navigationOptions:{  
      header:null
    } 
  },
  Camer:{
    screen:CamerScreen,
    navigationOptions:{  
      header:null
    } 
  }
  
}
const MainNavigator = createStackNavigator((stackConfig),{  
    initialRouteName: 'Login'
  });
   
  export default App = createAppContainer(MainNavigator); 