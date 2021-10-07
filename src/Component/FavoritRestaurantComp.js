import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import FavoritRestaurant from './molecule/FavoritRestaurant';

const FavoritRestaurantComp = () => {
  return (
    <View style={{}}>
      <Text style={{fontSize: 15, color: '#fff', marginTop: 9, marginLeft: 17}}>
        Favorit Restaurant
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FavoritRestaurant
          title="This T-Bone Steak is very delicious"
          img={require('./../assets/img/steak.jpg')}
        />
        <FavoritRestaurant
          title="Steak is very delicious"
          img={require('./../assets/img/food2.jpg')}
        />
        <FavoritRestaurant
          title="This T-Bone Steak is very delicious"
          img={require('./../assets/img/food3.jpg')}
        />
        <FavoritRestaurant
          title="This T-Bone Steak is very delicious"
          img={require('./../assets/img/semur-daging-sapi.png')}
        />
      </ScrollView>
    </View>
  );
};

export default FavoritRestaurantComp;

const styles = StyleSheet.create({});
