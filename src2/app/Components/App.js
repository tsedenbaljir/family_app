import {Text,TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import index from './index';
import Signup from './Signup'; 

const TabIcon = ({selected,title})=>{
  return(<Text style={{color:selected ? 'red' : 'black'}}>{title}</Text>);
};
const App = () => {
  return (
    <Router>
        <Scene key="root">
            <Scene key="tabber" tabs tabBarStyle={{backgroundColor:'#ffffff'}}> 
                <Scene //Нэвтрэх цонх
                key="Нэвтрэх цонх" icon={TabIcon}>
                    <Scene key="Нэвтрэх" component={index} hideNavBar /> 
                </Scene>          
            </Scene> 
            <Scene //Бүртгэл хийх хэсэг
            key="modal" component={Signup} direction="vertical" hideNavBar/>
        </Scene>
    </Router>
  );
}

export default App; 