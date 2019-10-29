import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
  Dimensions
} from "react-native";
import background from '../backgrounds/login_Background.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
const { width: WIDTH } = Dimensions.get('window');
const LOGIN_TYPE = 'LOGIN_TYPE';
const USER_NAME = 'USER_NAME';
const USER_PASS = 'USER_PASS';
export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      Password: '',
      loginType: '',
      photo: null,
      isLoading: false,
    };
  }
  /////////////////////////////////
  async storeToken() {
    const { FirstName, Password, loginType } = this.state;
    try {
      await AsyncStorage.setItem(LOGIN_TYPE, loginType);
      await AsyncStorage.setItem(USER_NAME, FirstName);
      await AsyncStorage.setItem(USER_PASS, Password);
    } catch (jerror) {
      console.log(error);
    }
  }
  componentDidMount() {
    AsyncStorage.getItem(LOGIN_TYPE)
      .then((item) => {
        if (item == 'true') {
          this.props.navigation.navigate("User",{
            itemId: 86,
            otherParam: 'anything you want here',
          });
        } 
      });
  }
  userLogin = () => {
    const { FirstName, Password } = this.state;
    /////////localhost deer baigaa ved//////
    ////////zaawal ooriinxoo ip-iig xiij////
    /////////////ogox shaardlagatai/////////
    fetch('http://192.168.1.8:3000/users/login?&FirstName='
      + FirstName + '&Password=' + Password)
      .then((response) => response.json())
      .then((responseJson) => {
        if (FirstName == '') {
          alert("Нэвтрэх нэрээ оруулана уу !.");
        } else {
          if (Password == '') {
            alert("Нууц үгээ оруулана уу !.");
          } else {
            if (responseJson.data == true) {
              this.setState({ loginType: 'true' })
              this.storeToken();
              this.props.navigation.navigate("User");
            } else {
              AsyncStorage.clear();
              this.setState({ loginType: 'false' })
              alert("Та бүртгэлгүй байна.");
            }
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
    /////////////////////////
  }
  render() {
    
    //////////////интернэт холболтыг хүлээх////////////////////////
    if (!AsyncStorage.getItem(LOGIN_TYPE)) {
      return (
        <ImageBackground source={background} style={styles.background}>
          <ActivityIndicator size="large" color="#00aa00" />
          <Text style={{ marginLeft: '20%' }}>Ачааллаж байна !!!</Text>
        </ImageBackground>
      );
    } else {
      //////////////////////////////////////
      return (
        <ImageBackground source={background} style={styles.background}>
          <View style={styles.LoginStyle}>
            <TextInput style={styles.input}
              placeholder={'Нэр'}
              onChangeText={(text) => this.setState({ FirstName: text })}
              value={this.state.text}
            />
            <TextInput style={styles.input}
              placeholder={'Нууц үг'}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({ Password: text })}
              value={this.state.text}
            />
          </View>
          <View style={styles.LoginButton}>
            <Text onPress={this.userLogin} style={styles.button}>Нэвтрэх</Text>
          </View>
          <View style={{ marginTop: 10 }} style={styles.LoginButton}>
            <Text style={styles.button} onPress={() => this.props.navigation.navigate("Register")}>Бүртгүүлэх</Text>
          </View>
        </ImageBackground>
      );
    }
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
  image: {
    width: '100%',
    height: '100%'
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
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#0006',
    borderWidth: 1,
    width: WIDTH - 100,
    borderRadius: 50,
    marginTop: 20,
    paddingLeft: 20,
    color: 'white'
  },
  button: {
    backgroundColor: '#841584',
    fontSize: 20,
    borderRadius: 50,
    color: 'white',
    height: 40,
    textAlign: 'center'
  },
  LoginButton: {
    backgroundColor: '#0006',
    width: WIDTH - 100,
    borderRadius: 50,
    marginTop: 20,
  },
  LoginStyle: {
    width: WIDTH - 100,
  },


});
{/**
 <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{
            this.setState({itemFirstName:item.FirstName})}
          {this.setState({itemLastName:item.LastName})}
          {this.setState({itemEmail:item.Email})}
          {this.setState({itemPassword:item.Password})}
          </Text>}
          keyExtractor={({id}, index) => id}
        />
  //////////////////////////
                <TouchableOpacity
                 style={[styles.slideContainer,styles.slide3]}
                 onPress={this.saveData}
                 >
                  <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 style={[styles.slideContainer,styles.slide3]}
                 onPress={this.displayData}
                 >
                  <Text>Login ner xarax</Text>
                </TouchableOpacity> 
                //////////////
     saveData(){
      let user = 'Tsedenbaljir';
      AsyncStorage.setItem('user',user);
    }
    displayData =async () => {
      try{
        let user=await AsyncStorage.getItem('user');
        alert(user);
      }
      catch(error){
        alert(error);
      }
    }         
              
              */}