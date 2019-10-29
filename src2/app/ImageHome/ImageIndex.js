import {Text,TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'; 
import Aldaraa from './Aldarxishig'
import Mishka from './Mishel'
const TabIcon = ({selected,title})=>{
  return(<Text style={{color:selected ? 'red' : 'black'}}>{title}</Text>);
}; 
const ImageIndex = () => { 
  return (
    <Router> 
      <Scene key="root">
        <Scene
          key="tabber"
          tabs
          tabBarStyle={{backgroundColor:'#ffffff'}}
          size={10}>
              <Scene key="Aldaraa" title="Алдараа" icon={TabIcon}>
                <Scene key="Алдараа"
                    component={Aldaraa} 
                    initial
                    hideNavBar  
                /> 
              </Scene>
              <Scene key="Mishka" title="Мишка" icon={TabIcon}>
                  <Scene
                    key="Мишка"
                    component={Mishka} 
                    initial
                    hideNavBar
                  />
              </Scene>               
        </Scene>  
      </Scene>
    </Router>
  );
}

export default ImageIndex;
 