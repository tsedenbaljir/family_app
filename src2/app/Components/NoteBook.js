import React from "react";
import {View,StyleSheet,Button,Text,TextInput} from "react-native"; 
import Icon from 'react-native-vector-icons/Ionicons' ; 
export default class NoteBook extends React.Component {
    constructor(props) { 
        super(props);
        this.state = { 
            add: false,
            Note:''
        };
      } 
    save(){
      fetch('http://192.168.45.241:3000/firebase/Note?Note='+this.state.Note);
        this.setState({add:false}) 
        alert('Өнөөдөрийн тэмдэглэлийг амжилттай хадгаллаа.')
    } 
    render() {
        return (
        <View style={styles.body}> 
        <Icon style={styles.back}
            name="md-arrow-round-back" 
            size={25}
            type='evilicon'
            color='black'
            onPress={() => this.props.navigation.goBack()}
          /> 
         {this.state.add == true && <Icon style={styles.back}
            name="md-close-circle-outline" 
            size={50}
            type='evilicon'
            color='black'
            onPress={()=>this.setState({add:false})}
        /> }
          {this.state.add == false && <Icon style={styles.back}
            name="md-add-circle-outline" 
            size={50}
            type='evilicon'
            color='black'
            onPress={()=>this.setState({add:true})}
          />}
          {this.state.add == true &&
          <View style={styles.textAreaContainer} >
            <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Өнөөдөр танд юу тохиолдсон бэ?"
            placeholderTextColor="white"
            numberOfLines={10}
            multiline={true}
            onChangeText={(text) => this.setState({ Note: text })}
            /> 
        </View>
        }
        {this.state.add == true &&<Text onPress={()=> this.save() }
        >Хадгалах</Text>}
        </View>
        )
    }
}
const styles = StyleSheet.create({
    back: { 
        marginTop:20,
        marginLeft:20, 
    },
    body:{
        backgroundColor:'gray',
        height:'100%'
    },
    textAreaContainer: {
        borderWidth: 1,
        padding: 5,
        height:164
      },
      textArea: {
        backgroundColor:'white',
        height: 150, 
      }
});