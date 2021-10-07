import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RestaurantMenu from './molecule/RestaurantMenu';

const RestaurantMenuComp = () => {
  return (
    <View style={{marginHorizontal: 17, marginTop: 13}}>
      <Text style={styles.title}>Restaurant Menu</Text>
      <View style={styles.body_card}>
        <RestaurantMenu
          icon={require('./../assets/icone/udon.png')}
          title="Food"
          desc="Types of Hevy Food"
        />
        <RestaurantMenu
          icon={require('./../assets/icone/nachos.png')}
          title="Snack"
          desc="Kind of Snack"
        />
        <RestaurantMenu
          icon={require('./../assets/icone/cocktail.png')}
          title="Drinks"
          desc="Type of Drinks"
        />
      </View>
    </View>
  );
};

export default RestaurantMenuComp;

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 15,
  },
  body_card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
