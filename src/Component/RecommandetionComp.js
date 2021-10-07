import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {bg_orange, bg_text_card} from '../assets/color';

const RecommandetionComp = props => {
  return (
    <View>
      <TouchableHighlight onPress={props.onPress}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.card}>
            <View style={styles.card_img}>
              <Image source={props.img1} style={styles.img} />
            </View>
            <View style={{marginHorizontal: 9}}>
              <Text style={styles.title}>Steak Panggang terenak</Text>
              <Text style={styles.desc}>Types of Heavy Food</Text>
              <Text style={styles.price}>$35</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.card_img}>
              <Image source={props.img2} style={styles.img} />
            </View>
            <View style={{marginHorizontal: 9}}>
              <Text style={styles.title}>Steak Panggang terenak</Text>
              <Text style={styles.desc}>Types of Heavy Food</Text>
              <Text style={styles.price}>$35</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default RecommandetionComp;

const styles = StyleSheet.create({
  card: {
    width: 175,
    height: 149,
    backgroundColor: '#000',
    marginVertical: 5,
    borderRadius: 7,
  },
  card_img: {
    borderWidth: 0,
    borderColor: '#fff',
    width: 175,
    height: 95,
  },
  img: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  title: {
    fontSize: 13,
    color: '#fff',
    marginTop: 3,
  },
  desc: {
    fontSize: 8,
    color: bg_text_card,
  },
  price: {
    color: bg_orange,
    fontSize: 12,
    marginTop: 2,
  },
});
