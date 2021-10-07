import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class NavbarComp extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.onPress}>
          {/* <TouchableOpacity onPress={this.props.onPress}> */}
          <View
            style={{
              borderWidth: 0,
              borderColor: 'white',
              height: 35,
              width: 45,
            }}>
            <Image
              source={this.props.img}
              style={{width: 20, height: 20, alignSelf: 'center'}}
            />
            <Text
              style={{
                color: '#fff',
                fontWeight: '400',
                fontSize: 10,
                textAlign: 'center',
              }}>
              {this.props.text}
            </Text>
          </View>
          {/* </TouchableOpacity> */}
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
