import React from "react";
import {View,StyleSheet,Text,Dimensions} from "react-native"; 
import Icon from 'react-native-vector-icons/Ionicons' ; 
const { width: WIDTH } = Dimensions.get('window');   
export default class Menu extends React.Component { 
    render() {
        return (
        <View name="menu" style={styles.menu}>
            <Icon style={styles.logout} 
                name="ios-log-out"
                size={50}
                type='evilicon'
                color='black'
                onPress={this.props.Logout}
            />
        </View>
        )
    } 
}
const styles = StyleSheet.create({
    logout:{
        position:'absolute',
        marginTop:20,
        marginLeft:WIDTH-50
      }
});