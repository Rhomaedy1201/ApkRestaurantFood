import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {src_text} from '../assets/color';

const SearchComp = props => {
  return (
    <View style={{marginHorizontal: 17}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 15,
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Pavilon Restaurant</Text>
        <TouchableOpacity>
          <Image
            source={require('./../assets/icone/search.png')}
            style={{width: 17, height: 17, marginTop: 4}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.inputan}>
          <Image
            source={require('./../assets/icone/search.png')}
            style={{width: 17, height: 17, marginTop: 9, marginLeft: 10}}
          />
          <Text style={styles.txt_Search}>Search Food and Drinks...</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchComp;
const styles = StyleSheet.create({
  inputan: {
    backgroundColor: '#fff',
    width: '100%',
    height: 37,
    borderRadius: 7,
    marginTop: 10,
    flexDirection: 'row',
  },
  txt_Search: {fontSize: 13, color: src_text, marginLeft: 10, marginTop: 7},
});
