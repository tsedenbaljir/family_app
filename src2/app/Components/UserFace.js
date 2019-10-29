import React from "react";
import {View,StyleSheet,Button,Text} from "react-native"; 
import Icon from 'react-native-vector-icons/Ionicons' ; 
export default class UserFace extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {   
            dataSource:''
        };
      }  
    componentDidMount(){
        fetch('http://192.168.1.112:3000/users/select?&FirstName='
    +this.props.FirstName+'&Password='+this.props.Password)
      .then((response) => response.json())
      .then((responseJson) => {  
         this.setState({ 
           dataSource: responseJson.data,
         }, function(){
         }); 
      }).catch((error) =>{
        console.error(error);
      }); 
    }
    render() {
    
        return (
            <View>
            <FlatList data={this.props.dataSource}
              renderItem={({item}) => <Text>{item.Firstname} 
              {item.LastName} {item.Email} {item.password}</Text>}
              keyExtractor={({id}, index) => id} 
            />
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