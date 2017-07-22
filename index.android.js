/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import RNCloudinary from './RNCloudinary';
var ImagePicker = require('react-native-image-picker');



export default class RNTestProject extends Component {

  onPressStart = () => {
    // More info on all the options is below in the README...just some common use cases shown here
    var options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    // Params
    // cloud_name, api_key, api_secret, preset_name(You have to set preset name for uploading)
    RNCloudinary.config('dzwf3sjmn', '398996945762346', 'Atx1VbogANJui9qcUim2cb4m6k4', 'mkqsb5ly');

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // let filePath = response.uri.replace('content://', '');
        let filePath = response.uri;

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        RNCloudinary.uploadImage(filePath).then(data => {
          debugger;
          console.log("Uploading finished....");
        })
        .catch(err => {
          debugger;
        })
        this.setState({
          avatarSource: source
        });
      }
    });


    
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Cloudinary Test Project
        </Text>
        <Text style={styles.instructions}>
          To get started, please click the 'Start' Button
        </Text>
        <TouchableOpacity 
          style={styles.btnStart}
          onPress={this.onPressStart}
        >
          <Text style={styles.btnTitle}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  btnStart: {
    marginTop: 30,
    width: 120,
    height: 30,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTitle: {
    color: 'white',
    fontSize: 15
  },
});

AppRegistry.registerComponent('RNTestProject', () => RNTestProject);
