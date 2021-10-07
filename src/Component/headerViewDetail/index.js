import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const HeaderViewDetail = props => {
  return (
    <View>
      <TouchableHighlight onPress={props.onPress}>
        <Image source={props.icon} />
      </TouchableHighlight>
    </View>
  );
};

export default HeaderViewDetail;

const styles = StyleSheet.create({});
