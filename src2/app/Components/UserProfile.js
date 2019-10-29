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
  Dimensions,
  Alert,
  RefreshControl
} from "react-native";
import background from '../backgrounds/login_Background.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
const { width: WIDTH } = Dimensions.get('window');
const LOGIN_TYPE = 'LOGIN_TYPE';
const USER_NAME = 'USER_NAME';
const USER_PASS = 'USER_PASS';
import Menu from './Menu';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      Password: '',
      Login_Type: '',
      dataSource: '',
      isLoading: false,
      refreshing: true,
    };
  }
  Loguot = () => {
    this.setState({
      isLoading: false,
    }, function () {
    });
    AsyncStorage.clear();
    this.props.navigation.navigate("Login");
  }
  _onRefresh = () => {
    AsyncStorage.getItem(USER_NAME, (err, FirstName) => {
      AsyncStorage.getItem(USER_PASS, (err, Password) => {
        fetch('http://192.168.1.8:3000/users/select?&FirstName='
          + FirstName + '&Password=' + Password)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: true,
              dataSource: responseJson.data,
              refreshing: false
            }, function () {
            });
          }).catch((error) => {
            console.error(error);
          });
      });
    });
  }
  componentDidMount() {
    AsyncStorage.getItem(USER_NAME, (err, FirstName) => {
      AsyncStorage.getItem(USER_PASS, (err, Password) => {
        fetch('http://192.168.1.8:3000/users/select?&FirstName='
          + FirstName + '&Password=' + Password)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: true,
              dataSource: responseJson.data,
            }, function () {
            });
          }).catch((error) => {
            console.error(error);
          });
      });
    });
  }
  render() {
    //////////////интернэт холболтыг хүлээх////////////////////////
    if (!this.state.isLoading) {
      return ( 
         <ImageBackground
          source={background}
          style={styles.background} 
          refreshControl={
            ! this.state.dataSource &&
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <ActivityIndicator size="large" color="#00aa00" />
          <Text style={{ marginLeft: '20%' }}> Интернэт холболтоо шалгана уу !!!</Text>
        </ImageBackground>
      );
    } else {
      //////////////////////////////////////
      return (
        <ImageBackground
          source={background}
          style={styles.background}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <Menu Logout={this.Loguot} />
          <View style={{ flex: 1, position: 'absolute', width: 100, height: 100, marginTop: 50, marginLeft: 50 }} >
            <FlatList data={this.state.dataSource}
              renderItem={({ item }) => <Text>{item.FirstName}
                {item.LastName} {item.Email} {item.Password}</Text>}
              keyExtractor={({ id }) => id.toString()}
            />
          </View>
          <View name="body" //////биеийн эхлэл/////////////////////////
            style={styles.profile}>
            <Icon name="md-images" size={50}
              type='evilicon'
              color='black'
              onPress={() => this.props.navigation.navigate('Home')}
            />
            <Icon style={styles.lesson}
              name="ios-school" size={50}
              type='evilicon'
              color='black'
              onPress={() => this.props.navigation.navigate('Lessons')}
            />
            <Icon style={styles.userbook}
              name="ios-bookmarks" size={50}
              type='evilicon'
              color='black'
              onPress={() => this.props.navigation.navigate('NoteBook')}
            />
            <Icon style={styles.Browser}
              name="md-globe" size={50}
              type='evilicon'
              color='black'
              onPress={() => Alert.alert('', 'Бүрэн хөгжүүлж дуусгаагүй байна.')}
            />
            <Icon style={styles.camer}
              name="ios-camera" size={50}
              type='evilicon'
              color='black'
              onPress={() => this.props.navigation.navigate('Camer')}
            />
            <Icon style={styles.calendar}
              name="md-calendar" size={50}
              type='evilicon'
              color='black'
              onPress={() => this.props.navigation.navigate('Calendar')}
            />
            <Icon style={styles.PhoneNumber}
              name="ios-call" size={50}
              type='evilicon'
              color='black'
              onPress={() => Alert.alert('', 'Бүрэн хөгжүүлж дуусгаагүй байна.')}
            />
            <IconAwesome style={styles.Qrcode}
              name="qrcode" size={50}
              type='evilicon'
              color='black'
              onPress={() => Alert.alert('', 'Бүрэн хөгжүүлж дуусгаагүй байна.')}
            />
            <IconFeather style={styles.Weater}
              name="cloud-snow" size={50}
              type='evilicon'
              color='black'
              onPress={() => Alert.alert('', 'Бүрэн хөгжүүлж дуусгаагүй байна.')}
            />
            <Icon style={styles.map}
              name="ios-globe" size={50}
              type='evilicon'
              color='black'
              onPress={() => this.props.navigation.navigate('Map')}
            />
          </View>
          {
            ///////бие хэсэгийн төгөсгөл///////////////////////
          }
        </ImageBackground>
      );
      /////////////////////////////////////
    }
  }

}
const styles = StyleSheet.create({
  background: {
    width: WIDTH,
    height: '100%',
  },
  //хичээлийн лаб
  lesson: {
    position: 'absolute',
    marginLeft: 80,
  },
  profile: {
    marginLeft: 50,
    marginTop: 100
  },
  //өдрийн тэмдэглэл хөтлөх
  userbook: {
    position: 'absolute',
    marginLeft: 180
  },//газрын зураг
  Browser: {
    position: 'absolute',
    marginLeft: 0,
    marginTop: 100
  },//газрын зураг
  camer: {
    position: 'absolute',
    marginLeft: 80,
    marginTop: 100
  },//газрын зураг
  calendar: {
    position: 'absolute',
    marginLeft: 180,
    marginTop: 100
  },
  PhoneNumber: {
    position: 'absolute',
    marginTop: 200
  },
  Qrcode: {
    position: 'absolute',
    marginLeft: 80,
    marginTop: 200
  },
  Weater: {
    position: 'absolute',
    marginLeft: 180,
    marginTop: 200
  },
  map: {
    position: 'absolute',
    marginTop: 300
  },//газрын зураг
}); 