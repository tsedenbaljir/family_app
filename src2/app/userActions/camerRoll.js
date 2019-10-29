import React ,{Component}from "react";
import {Text,View} from "react-native"; 
import CamerRoll from 'react-native-camera-roll-picker';
export default class camerRoll extends React.Component {  
    getSelectedImages(image){
        if(imagge[0]){
            alert(image[0].uri);
        }
    }

    render(){
        return(
            <CamerRoll callback={this.getSelectedImages} 
            assetType='ALL' maximum={1} />
        )
    }
}