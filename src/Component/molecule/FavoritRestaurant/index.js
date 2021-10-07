import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {bg_text_card} from '../../../assets/color';

const FavoritRestaurant = props => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.card_img}>
          <Image source={props.img} style={styles.img} />
        </View>
        <View style={{marginLeft: 10, marginTop: 3}}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.desc}>Types of Heavy Food</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./../../../assets/icone/star.png')}
              style={styles.star}
            />
            <Image
              source={require('./../../../assets/icone/star.png')}
              style={styles.star}
            />
            <Image
              source={require('./../../../assets/icone/star.png')}
              style={styles.star}
            />
            <Image
              source={require('./../../../assets/icone/star.png')}
              style={styles.star}
            />
            <Image
              source={require('./../../../assets/icone/star.png')}
              style={styles.star}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FavoritRestaurant;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000',
    width: 268,
    height: 164,
    borderRadius: 7,
    marginTop: 10,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginLeft: 17,
  },
  card_img: {
    borderWidth: 0,
    borderColor: '#fff',
    width: 268,
    height: 103.65,
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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  desc: {
    fontSize: 8,
    color: bg_text_card,
    marginTop: 2,
  },
  star: {
    width: 9,
    height: 8,
    marginTop: 8,
    marginHorizontal: 2,
  },
});
