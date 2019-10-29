import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, CameraRoll } from 'react-native';
export default class Home extends React.Component {
  state = {
    imgUri: null,
    topText: '',
    bottomText: '',
  }
  render() {

    _onChoosePic = async () => {
      const {
        cancelled,
        uri,
      } = await Expo.ImagePicker.launchImageLibraryAsync();
      if (!cancelled) {
        this.setState({ imageUri: uri });
      }
    }

    _onTakePic = async () => {
      const {
        cancelled,
        uri,
      } = await Expo.ImagePicker.launchCameraAsync({});
      if (!cancelled) {
        this.setState({ imgUri: uri });
      }
    }

    _onSave = async () => {
      const uri = await Expo.takeSnapshotAsync(this.imageView, {});
      await CameraRoll.saveToCameraRoll(uri);
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Image Picker
        </Text>

        <Image ref={(ref) => this.imageView = ref}
          style={{ width: 300, height: 300, backgroundColor: '#dddddd' }}
          source={{ uri: this.state.imgUri }}
        />

        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity
            style={styles.button}
            onPress={this._onChoosePic}>
            <Text style={styles.buttonText}>Choose</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={this._onTakePic}>
            <Text style={styles.buttonText}>Take</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={this._onSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    margin: 20,
  },
  buttonText: {
    fontSize: 21,
  },
  button: {
    padding: 13,
    margin: 15,
    backgroundColor: '#dddddd',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
});
