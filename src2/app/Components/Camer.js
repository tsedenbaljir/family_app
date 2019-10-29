import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Camer extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}> 
          <Camera style={{ flex: 1 }} 
          type={this.state.type}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                width: '100%'
              }}> 
            </View>
          </Camera>
          <Text
          style={{color:'black',fontSize:20,marginTop:20,width:100}}
            onPress={() => this.props.navigation.goBack()}
          >BACK</Text>  
            <Text
            onPress={() => {
              this.setState({
                type:
                  this.state.type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
              });
            }} 
            style={{ fontSize: 18, marginBottom: 10, color: 'gray',backgroundColor:'black',width:100 }}> 
            Эргүүлэх </Text>
        </View>
      );
    }
  }
}