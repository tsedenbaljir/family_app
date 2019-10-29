import React from "react";
import {View,StyleSheet,Button,Text} from "react-native"; 
import Icon from 'react-native-vector-icons/Ionicons' ; 
export default class Lessons extends React.Component {
    render() {
        return (
        <View style={styles.body}> 
        <Text title="Буцах" style={styles.button} 
              onPress={() => this.props.navigation.goBack()}
          >Буцах
          </Text>  
        </View>
        )
    }
}
const styles = StyleSheet.create({
    button: { 
        marginTop:20,
        marginLeft:20,
        backgroundColor:'black'
    },
    body:{
        backgroundColor:'gray'
    }
});