import React from "react";
import {View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  Button,
  FlatList,
  Dimensions
} from "react-native"; 
import background from '../backgrounds/login_Background.jpg'
import Icon from 'react-native-vector-icons/Ionicons' ; 
const { width: WIDTH } = Dimensions.get('window'); 
const { width: HEIGHT } = Dimensions.get('window');  
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        FirstName:'', 
        Email:'', 
        LastName:'',
        Password:'', 
        Password2:''
    }
  } 
  userRegister=()=>{ 
    const {FirstName,Email,LastName,Password,Password2}=this.state
     
    if(Password.length != 0){
    if(Password == Password2){ 
      /////////localhost deer baigaa ved//////
     ////////zaawal ooriinxoo ip-iig xiij////
    ////////////ogox shaardlagatai//////////
        fetch('http://192.168.1.8:3000/users/signup?&FirstName='
    +FirstName+'&LastName='+LastName+ '&Email='+Email+ '&Password='+Password); 
    /////////bvrtel xeseg////////////
    alert('Амжилттай бүртэглээ.'); 
    this.props.navigation.goBack();
    }else{
    alert('Нууц үгээ баталгаажуул !!!');
  }
}else{
  alert('Нууц үг оруулана уу!!!')
}

  }
    render() {
        return (
          <ImageBackground source={background} style={styles.background}> 
            <View style={{width:100,marginLeft:WIDTH-370}}>  
              <Icon name="ios-person" size={100}
                type='evilicon'
                color='#517fa4'
              />
            </View>
          <View style={styles.LoginStyle}>  
          <TextInput style={styles.input}
            placeholder={'Нэр'}
            onChangeText={(text) => this.setState({FirstName: text})}
            value={this.state.text}
          /> 
          <TextInput style={styles.input}
            placeholder={'Овог'}
            onChangeText={(text) => this.setState({LastName: text})}
            value={this.state.text}
          /> 
          <TextInput style={styles.input}
            placeholder={'Е-майл'}
            onChangeText={(text) => this.setState({Email: text})}
            value={this.state.text}
          /> 
          <TextInput style={styles.input}
            placeholder={'Нууц үг'}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({Password: text})}
            value={this.state.text}
          />
          <TextInput style={styles.input}
            placeholder={'Нууц үг баталгаажуулах'}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({Password2: text})}
            value={this.state.text}
          /> 
          </View>
          <View style={styles.LoginButton}>
          <Text style={styles.button} 
          onPress={this.userRegister}
          >Бүртгүүлэх</Text>
          </View>
          <View style={styles.LoginButton}>
          <Text title="Буцах" style={styles.button} 
              onPress={() => this.props.navigation.goBack()}
          >Буцах
          </Text>  
          </View>
        </ImageBackground>
        )
    }
    
} 
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {
        backgroundColor: "rgba(20,20,200,0.3)"
    },
    image :{
      width:'100%',
      height:'100%'
     },
    slide2: {
        backgroundColor: "rgba(20,200,20,0.3)" 
    },
    slide3: {
        backgroundColor: "rgba(200,20,20,0.3)" 
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
    }, 
    background: {
     flex: 1,
     width:'100%',
     height:'100%',
     justifyContent:'center',
     alignItems:'center',
     position:'absolute'
   },
   input:{
    height: 40, 
    borderColor: 'gray',
    backgroundColor:'#0006',
    borderWidth: 1,
    width:WIDTH-100,
    borderRadius: 50,
    marginTop:20,
    paddingLeft:20,
    color:'white'
   },
   button:{ 
     backgroundColor:'#841584',
     fontSize:20,
     borderRadius: 50,
     color:'white',
     height:40,
     textAlign:'center'
   },
   LoginButton:{ 
    height: 40,  
    backgroundColor:'#0006', 
    width:WIDTH-100,
    borderRadius: 50,
    marginTop:20,  
   },
   LoginStyle:{
    width:WIDTH-100, 
   },
   

});  