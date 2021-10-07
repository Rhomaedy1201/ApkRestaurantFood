import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {bg_orange, bg_text_menu} from '../../../assets/color';

const RestaurantMenu = props => {
  return (
    <View>
      <View style={styles.card}>
        <View style={{marginTop: 23, marginLeft: 10}}>
          <Text style={styles.title_card}>{props.title}</Text>
          <Text style={styles.desc_card}>{props.desc}</Text>
          <Image source={props.icon} style={styles.img_card} />
        </View>
      </View>
    </View>
  );
};

export default RestaurantMenu;

const styles = StyleSheet.create({
  card: {
    backgroundColor: bg_orange,
    width: 103,
    height: 65,
    borderRadius: 6,
    position: 'relative',
  },
  title_card: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  desc_card: {
    fontSize: 8,
    color: bg_text_menu,
  },
  img_card: {
    width: 25,
    height: 25,
    position: 'absolute',
    marginTop: -18,
    marginLeft: 58,
  },
});
