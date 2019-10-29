import React from 'react';
import { Text, View, Linking } from 'react-native';
import { QRScann } from 'react-native-qrcode-scanner';

export default class QRScanner extends React.Component {
 onSuccess(e){
    Linking.openURL(e.data).catch(err=>console.log('Aldaa',err));
 }
  render() { 
      return (
          <QRScann 
          onRead={this.onSuccess.bind(this)}
          style={{ flex: 1 }} type={this.state.type}
          bottomContent={
              <Text>
                  take it
              </Text>
          }          
          /> 
      );
    }
  } 
